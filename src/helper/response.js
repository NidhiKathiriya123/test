const responseMessage = {
   
   
    internalServerError: "Internal Server Error!",
    addDataError: "Oops! Something went wrong!",

    customMessage: (message) => { return `${message[0].toUpperCase() + message.slice(1).toLowerCase()}` },
    invalidId: (message) => { return `invalid ${message}!` },
    dataAlreadyExist: (message) => { return `Since the ${message} is already in use, kindly modify it!` },
    getDataSuccess: (message) => { return `${message[0].toUpperCase() + message.slice(1).toLowerCase()} successfully retrieved!` },
    addDataSuccess: (message) => { return `${message[0].toUpperCase() + message.slice(1).toLowerCase()} successfully added!` },
    getDataNotFound: (message) => { return `We couldn't find the ${message.toLowerCase()} you requested!` },
    updateDataSuccess: (message) => { return `${message[0].toUpperCase() + message.slice(1).toLowerCase()} has been successfully updated!` },
    updateDataError: (message) => { return `${message[0].toUpperCase() + message.slice(1).toLowerCase()} updating time getting an error!` },
    deleteDataSuccess: (message) => { return `Your ${message.toLowerCase()} has been successfully deleted!` },
    deleteDataSuccessError: (message) => { return `Your ${message.toLowerCase()} has been not deleted!` },
    notFound: (message) => { return `You've request post ${message.toLowerCase()} does not exist! Please pass valid params` },

}

module.exports = { responseMessage };
