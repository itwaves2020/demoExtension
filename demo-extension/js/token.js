(async function () {
    await window.__config({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MGZjMTNkZWEwMjhhODJkM2I4NjcxZDJlN2NhZjMyZTM0NmU3ZjkifQ.eyJpc3MiOiJodHRwczovL2Z1bGxjcmVhdGl2ZS5mdWxsYXV0aC5jb20iLCJpYXQiOjE2MjA1NzI2NTUsInByb2pfaWQiOiJzZXRtb3JlIiwidHlwZSI6InVzZXIiLCJzdWIiOiI0YTUwNjExNS1jYWM5LTRkMzUtYWQ1MS0zNzE5Nzk4NjM1ZTEiLCJleHAiOjE2MjExNzc0NTUsImp0aSI6IjgyOWYyYmZmR052TTR5aTEifQ.lEpi9UxoGxTbGuZFGnqILOZZQqMgRWs-1HuVaDsMtt_pacjEwP0agHo0amCg97yMxLUsntJzb7ikPqGI7LqH3-MPQTyJt3XV07lOXvERBAsWa-lOB8vQFg8m4zRNaOvXZe_wPqK16COLCyvlqcHpOHMZ2fT_VUAV-4KVhttRcGdq3E2PDAIWxQdq8QiZQLeN3vHnrjEsa6A-QBLhnw94UYGnQpVQU6_qQYJVYg_hqBU3phtAWI8pLMBcL0JRCdItI9bWvCeRkqnq4hpeb1d7MtYza9IlykKwfipqYh607YAmSx9YUYC_Q4dSuTJ3ULaWK2VX2c-eDbRWFcvVn6wr5w',
        },
        isDev: false,
        baseUrl: "https://auth-dot-services-dot-schedulingengine.uc.r.appspot.com/schedule/v3"
    }, (ack) => {
        console.log(ack);
    })
}())