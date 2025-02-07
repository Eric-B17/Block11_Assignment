const user1 = {
    address: {
        city: "New York City"
    }
};
const user2 = {};

function getUserCity(user){
    return user?.address?.city ?? "unknown"
}

console.log(getUserCity(user1));
console.log(getUserCity(user2));