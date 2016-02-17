const log = document.querySelector('#log');
const url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}'

function getUser() {
    return new Promise(res => {
        setTimeout(() => { res({ name: 'foo' }) }, 3000)
    })
}

async function test() {
    var user = await getUser()

    console.log(user)
}

test()



