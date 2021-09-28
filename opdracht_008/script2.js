const bouncer = function (age) {
    if (age < 18) {
        return "this is a club for adults";
    }
    else if (age => 18) {
        return "come in";
    }
}

const entries = function (number) {
    if (number => 100) {
        return "it's too busy now, come back later"
    }
    else {
        return "come in";
    }
}

const age = bouncer(17);
console.log(age);
const number = bouncer(100);
console.log(number);

// function that does something