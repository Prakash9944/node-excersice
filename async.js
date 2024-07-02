
var getData = function  (argument) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("after 1 seconds "+ argument)
        }, 1000)
    })
}

var call = async function() {
    var urls = [10, 15, 20, 35, 56, 78, 90]
    // for(let url of urls) {
    //     let data = await getData(url)
    //     console.log('Executing sync order ', data)
    // }

    // for(let i=0; i < urls.length; i++) {
    //     let data = await getData(urls[i])
    //     console.log('Executing sync order ', data)
    // }

    urls.forEach(async (item) => {
        let data = await getData(item)
        console.log('Executing sync order ', data)
    })
}

call()