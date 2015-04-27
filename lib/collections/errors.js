// local client only collections see the 'null' name
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({
        message: message
    });
};
