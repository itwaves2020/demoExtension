(async function () {
    await window.__config({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MGZjMTNkZWEwMjhhODJkM2I4NjcxZDJlN2NhZjMyZTM0NmU3ZjkifQ.eyJpc3MiOiJodHRwczovL2Z1bGxjcmVhdGl2ZS5mdWxsYXV0aC5jb20iLCJpYXQiOjE2MjA4MTEzMTYsInByb2pfaWQiOiJzZXRtb3JlIiwidHlwZSI6InVzZXIiLCJzdWIiOiI0YTUwNjExNS1jYWM5LTRkMzUtYWQ1MS0zNzE5Nzk4NjM1ZTEiLCJleHAiOjE2MjE0MTYxMTYsImp0aSI6IjdlZmQ0Y05UeUdrYlQ3TWwifQ.vELiE1Z588CSytGlpZwmwW7dR6TmJC60c3EM-ZJx2DmmY9znHPwUhzGCoEEbFOr2rEQpDf63Z6IB68EabgzRMRSnEAotMTY7IlgxHPuRMqKzkkaib-mpHRunl04XcJQWt33IEYdrDheUB3Ylqd7YruiFgeHG9Q4sZxbBb3a94VbPHJNbHA5YOJhuu1zoVbr_0B8iBVvtzbOplP4TkpPNPhF-mLJlGR5eqqnbpzQYU5v1dPbycYJyNixAPDi3Bo783wSwA4RSS4sxd1iJBBK--dYF_XQ-L2GFxSnbqsDPMddREZw6P8N_yTZ6N8qU9I1JPE-6sJtS73b7yTfPyIDwBg',
        },
        isDev: false,
        baseUrl: "https://auth-dot-services-dot-schedulingengine.uc.r.appspot.com/schedule/v3"
    }, (ack) => {
        console.log("Chgrome to check cookies function:=> ", chrome);
    })
}())