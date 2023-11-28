// Use callbacks to simulate the basic process of making a sandwich

// prepareIngredients
function prepareIngredients(callback) {
    setTimeout(() => {
        callback("Ingredients are prepared.");
    }, 2000); // after 2 seconds, call callback w/ message "Ingredients are prepared."
}

// assembleSandwich
function assembleSandwich(callback) {
    setTimeout(() => {
        callback("Sandwich is assembled.")
    }, 1500); // after 1.5 seconds, call callback w/ message "Sandwich is assembled;"
}

// serveSandwich
function serveSandwich(callback) {
    setTimeout(() => {
        callback("Sandwich is served.")
    }, 1000); // after 1 second, call callback w/ message "Sandwich is served."
}

// makeSandwich
// responsible for calling functions with callback functions to log messages after each step
function makeSandwich() {
    // call prepareIngredients function to prepare ingredients
    // input callback function that prints input message to console.log
    // callback function is called after timeout of 2 seconds
    // message1 = "Ingredients are prepared."
    // then call next step in sandwich making process
    prepareIngredients((message1) => {
        console.log(message1);
        
        // call assembleSandwich function to start assembling sandwich
        // input callback function that prints input message to console.log
        // callback function is called after timeout of 1.5 seconds
        // message2 = "Sandwich is assembled."
        // then call next step in sandwich making process
        assembleSandwich((message2) => {
            console.log(message2);

            // call serveSandwich function to serve sandwich
            // input callback function that prtins input message to console.log
            // callback function is called after timeout of 1 second
            // message3 = "sandwich is served."
            serveSandwich((message3) => {
                console.log(message3);
            });
        });
    });
}

// call makeSandwich function
makeSandwich();