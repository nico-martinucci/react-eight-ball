import sample from "lodash/sample";

/**
 * chooseRandomeMessage: chooses a random message from the provided list of 
 * messages and returns it.
 * @param {array} messages 
 * @returns random message
 */
function chooseRandomMessage(messages) {
    return sample(messages);
}

export { chooseRandomMessage };