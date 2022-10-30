// Week 077 day 03 cc:
//  Write a curryfied function for the following function:
// function myFunc(a,b,c)
// {
// return (a+b)/c
// }
function firstVar(a) {
    function secondVar(b) {
        function thirdVar(c) {
            function action() {
                console.log((a + b) / c);
            }
            return action;
        }
        return thirdVar;
    }
    return secondVar;
}

firstVar(2)(15)(4)();