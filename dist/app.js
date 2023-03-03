"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var http_errors_1 = __importDefault(require("http-errors"));
// const swaggerJsDocs = require('swagger-jsdoc');
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var index_1 = __importDefault(require("./routes/index"));
var posts_1 = __importDefault(require("./routes/posts"));
var users_1 = __importDefault(require("./routes/users"));
var app = (0, express_1.default)();
// Loads variables from .env file in development mode
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
else {
    // Loads variables from .env.prod file in production mode
    dotenv_1.default.config({ path: '.env.prod' });
}
// Declares swagger definition and apis to document
var options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'nobullcode-blog service',
            description: 'API used for No Bull Code Blog',
            version: '1.0.0'
        },
        servers: [
            {
                url: "http://localhost:".concat(process.env.PORT),
                description: 'Development Server'
            }
        ]
    },
    apis: [
        './src/swagger-docs/*.yaml'
    ],
};
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
var swaggerSpec = (0, swagger_jsdoc_1.default)(options);
app.use('/swagger-ui', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use('/', index_1.default);
app.use('/posts', posts_1.default);
app.use('/users', users_1.default);
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// Error handler
app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
