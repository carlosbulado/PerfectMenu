interface Object {
    removePropertiesForConnectingToFirebase(object : Object) : Object;
}

// Object.prototype.removePropertiesForConnectingToFirebase = function(object : Object) : Object
// {
//     delete object['id'];

//     for (let [key, value] of Object.entries(object))
//     {
//         if(value instanceof Array)
//         {
//             delete object[key];
//         }
//     }

//     return object;
// }

Object.removePropertiesForConnectingToFirebase = function(object : Object) : Object
{
    delete object['id'];

    for (let [key, value] of Object.entries(object))
    {
        if(value instanceof Array)
        {
            delete object[key];
        }
    }

    return object;
}