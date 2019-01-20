const {expect} = require("chai")
const main = require('../index');

function request(color){
    let request = {
        "version": "1.0",
        "session": {
            "new": false,
            "sessionId": "amzn1.echo-api.session.42f90fc2-399b-4c53-92cf-6dd334f77cc8",
            "application": {
                "applicationId": "amzn1.ask.skill.e76ae1db-59d2-4cf3-9e54-06abc8cdc1fb"
            },
            "user": {
                "userId": "amzn1.ask.account.AHAHTDRX6JDBCVMME7TXQQXJWAH4VCEEQDB3637AKIMPWUZP7EIIBXTB2LGEG3ZOLKE4WCCVTAUFSOWOGV65HH3DGTE3MR62YFBHV3UE5WFNTU3YLX3KE4JFNIIH472TD6TF6UUJJJLGHKO3SQ6RPRCRKFYZWP7WDA76XBETNPVVAPVR2ZFXOFGQ3TS6VOCDLBL5CONZQWWC2PI"
            }
        },
        "context": {
            "System": {
                "application": {
                    "applicationId": "amzn1.ask.skill.e76ae1db-59d2-4cf3-9e54-06abc8cdc1fb"
                },
                "user": {
                    "userId": "amzn1.ask.account.AHAHTDRX6JDBCVMME7TXQQXJWAH4VCEEQDB3637AKIMPWUZP7EIIBXTB2LGEG3ZOLKE4WCCVTAUFSOWOGV65HH3DGTE3MR62YFBHV3UE5WFNTU3YLX3KE4JFNIIH472TD6TF6UUJJJLGHKO3SQ6RPRCRKFYZWP7WDA76XBETNPVVAPVR2ZFXOFGQ3TS6VOCDLBL5CONZQWWC2PI"
                },
                "device": {
                    "deviceId": "amzn1.ask.device.AHGD52T546GGTAH6S3ZLCWC7GOTWD3GOA6WVZZESOKCG7RCUA2RV6P3ST6PFVZAKESMEZTBZMPLJDBQQOIIKFHZRGW43BDJMWMVGMXFYDQYNMS5J52QKO5DHPVEZD4HB7TG5RI23TV6OB2LNDZXONGXPD6LA6GMR5LB4KCDYED24N6273N2IQ",
                    "supportedInterfaces": {}
                },
                "apiEndpoint": "https://api.amazonalexa.com",
                "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLmU3NmFlMWRiLTU5ZDItNGNmMy05ZTU0LTA2YWJjOGNkYzFmYiIsImV4cCI6MTU0Nzk2MzI5NCwiaWF0IjoxNTQ3OTU5Njk0LCJuYmYiOjE1NDc5NTk2OTQsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUhHRDUyVDU0NkdHVEFINlMzWkxDV0M3R09UV0QzR09BNldWWlpFU09LQ0c3UkNVQTJSVjZQM1NUNlBGVlpBS0VTTUVaVEJaTVBMSkRCUVFPSUlLRkhaUkdXNDNCREpNV01WR01YRllEUVlOTVM1SjUyUUtPNURIUFZFWkQ0SEI3VEc1UkkyM1RWNk9CMkxORFpYT05HWFBENkxBNkdNUjVMQjRLQ0RZRUQyNE42MjczTjJJUSIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFIQUhURFJYNkpEQkNWTU1FN1RYUVFYSldBSDRWQ0VFUURCMzYzN0FLSU1QV1VaUDdFSUlCWFRCMkxHRUczWk9MS0U0V0NDVlRBVUZTT1dPR1Y2NUhIM0RHVEUzTVI2MllGQkhWM1VFNVdGTlRVM1lMWDNLRTRKRk5JSUg0NzJURDZURjZVVUpKSkxHSEtPM1NRNlJQUkNSS0ZZWldQN1dEQTc2WEJFVE5QVlZBUFZSMlpGWE9GR1EzVFM2Vk9DRExCTDVDT05aUVdXQzJQSSJ9fQ.CYm3ktAD4KM7rl6FreFLDWlKDmxbme38hHXPqGPUXjbNcPgkuTv7zHM0sFwc0LMm0cyjy9P6120sPLyENjXiZMN_R9DA1NKnLjod8n8lZpYLFBjAR_0gyT2gW_eYMZPT0ZL6uLygl4-p6oF-whKDi6efv7UXIHpRcd60BS4Wfe5J61T82yb8SWgjGIysi86KqnX3ZrN4lT-tjT0-u-CyE4KxFkZRkhnqUglRePCeCKeAPy8DdNCAxkCzVg1Fnq0qm_QgLCoTZPk3meVFKghJIW3dhtoajcwtIglUu_1_aJpSM6yBmMmKXP9b3I5kDJ0a7iJI0WZuYNVAS_CWZaWkew"
            },
            "Viewport": {
                "experiences": [
                    {
                        "arcMinuteWidth": 246,
                        "arcMinuteHeight": 144,
                        "canRotate": false,
                        "canResize": false
                    }
                ],
                "shape": "RECTANGLE",
                "pixelWidth": 1024,
                "pixelHeight": 600,
                "dpi": 160,
                "currentPixelWidth": 1024,
                "currentPixelHeight": 600,
                "touch": [
                    "SINGLE"
                ]
            }
        },
        "request": {
            "type": "IntentRequest",
            "requestId": "amzn1.echo-api.request.40304ca9-0e29-4ee2-82a4-e0c863c947c8",
            "timestamp": "2019-01-20T04:48:14Z",
            "locale": "en-US",
            "intent": {
                "name": "MetroLineIntent",
                "confirmationStatus": "NONE",
                "slots": {
                    "color_line": {
                        "name": "color_line",
                        "value": color,
                        "confirmationStatus": "NONE",
                        "source": "USER"
                    }
                }
            }
        }
    }
    let context = null
    
    return new Promise( (res,rej) => {
        main.handler(request, context, (err,data) => { res(data)} )
    })
}

describe("Testing a session with the metroIntent", () => {
    var speechResponse = null
    var speechError = null


    describe("The response is structurally correct for Alexa Speech Services with the red line", () => {
        before(async () => {
            try {
                speechResponse = await request('red')
            } catch (e){
                speechError = e;
            }
        })
        it('should not have errored',function() {
            expect(speechError).to.be.null
        })

        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.null
        })

        it('should have a speechlet response', function() {
            expect(speechResponse.response).not.to.be.null
        })

        it("should have a spoken response", () => {
            expect(speechResponse.response.outputSpeech).not.to.be.null
            expect(speechResponse.response.outputSpeech.ssml).not.to.be.null
        })

        it("should says no red line", () => {
            expect(speechResponse.response.outputSpeech.ssml).to.equal('<speak>"There is no red line."</speak>')
        })
    })

    describe("The response is structurally correct for Alexa Speech Services with the orange line", () => {
        before(async () => {
            try {
                speechResponse = await request('orange')
            } catch (e){
                speechError = e;
            }
        })
        it('should not have errored',function() {
            expect(speechError).to.be.null
        })

        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.null
        })

        it('should have a speechlet response', function() {
            expect(speechResponse.response).not.to.be.null
        })

        it("should have a spoken response", () => {
            expect(speechResponse.response.outputSpeech).not.to.be.null
            expect(speechResponse.response.outputSpeech.ssml).not.to.be.null
        })

        it("should says no red line", () => {
            expect(speechResponse.response.outputSpeech.ssml).to.equal('<speak>Service is up and running. You are good to go.</speak>')
        })
    })
})
