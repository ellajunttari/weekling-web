import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './pohja.css';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const App = () => {

    const handleClick = () => {

        axios.post('/', {
            times: new Date()
        })
            .then((response) => {
                console.log(response.data)
            }, (error) => {
                console.log(error.response)
            })
    }

    var timesArray = [
        ['08'],
        ['09'],
        ['10'],
        ['11'],
        ['12'],
        ['13'],
        ['14'],
        ['15'],
        ['16'],
        ['17'],
        ['18'],
        ['19']
    ]

    var daysArray = [
        ['00'],
        ['01'],
        ['02'],
        ['03'],
        ['04'],
        ['05'],
        ['06'],
        ['07'],
        ['00']
    ]

    const handleSubmit = () => {
        var inputElements = document.getElementsByClassName('check')
        var suitableTimes = []

        for (var i = 0; i < inputElements.length; ++i) {
            if (inputElements[i].checked) {
                var z = (inputElements[i].id).split(',')
                var x = z[0]
                var y = z[1].trimLeft()
                //var b = (daysArray[x].toString() + timesArray[y].toString())

                // Luodaan tietojen pohjalta uusi Date()
                var c = new Date()
                c.setDate(daysArray[x].toString())
                c.setHours(timesArray[y].toString())
                c.setMinutes(0)
                c.setSeconds(0)
                c.setMonth(0)
                c.setMilliseconds(0)
                console.log(c)

                suitableTimes.push(c)
            }
        }
        if (suitableTimes.length === 0) {
            const notyf = new Notyf()
            notyf.error('Please, select some times before submitting')
        } else {
            const notyf = new Notyf()
            notyf.success('Success!')
        }

        axios.put('/', {
            times: suitableTimes
        })
            .then((response) => {
                console.log(response.data)
            }, (error) => {
                console.log(error.response)
            })
           
    }

    window.onload = function () {
        createChecks(12);
    }

    function createChecks(maara) {
        for (let i = 1; i < 8; i++) {
            var paiva = document.getElementById(i)
            for (let j = 0; j < maara; j++) {
                let checkCont = document.createElement("div")
                checkCont.className = "checkcontainer";
                checkCont.id = 'checkCont' + i + j;
                checkCont.style.backgroundColor = '#292929';
                paiva.appendChild(checkCont);

                let check = document.createElement('input');
                checkCont.appendChild(check);
                check.className = 'check';
                var x = `${i}, ${j}`
                check.id = x //paiva.id // kertoo mikä päivä on (idn)
                check.type = 'checkbox';
                check.addEventListener('change', checkColor, false)
            
            }
        }
    }
    
    function checkColor(event) {
        var box = event.target;
        var cont = box.parentNode;
        if (box.checked) {
            cont.style.backgroundColor = ' #c3a41e';
        }
        else {
            cont.style.backgroundColor = '#292929';
        }
    }

    return (
        <html>
            <head>
                <meta charset="UTF-8" />
                <link type="text/css" href="pohja.css" />
                <script src="pohja.js"> </script>
            </head>
            <body id="vartalo">
                <div id="headerContainer">
                    <a href="/"><img src="weekling_logo_1.png" alt="logo" /></a>
                    <!--HREF TO WEBSITE ADDRESS-->
                </div>

                <div id="instructions">
                    <p id="instructions-text">Please select available times and press Send</p>
                </div>
        
                <div id="kalenteri">
                    <aside class="sivu">
                        <ul class="left">
                            <li class="ajat">
                                <label className="ajatLabel">Times
                            <div class="time">
                                        <p class="teksti">8-9</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">9-10</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">10-11</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">11-12</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">12-13</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">13-14</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">14-15</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">15-16</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">16-17</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">17-18</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">18-19</p>
                                    </div>
                                    <div class="time">
                                        <p class="teksti">19-20</p>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </aside>
                    <ul class="k">
                        <li class="date">
                            <div class="group" id='1'>Monday</div>
                        </li>
                        <li class="date">
                            <div class="group" id='2'>Tuesday</div>
                        </li>
                        <li class="date">
                            <div class="group" id='3'>Wednesday</div>
                        </li>
                        <li class="date">
                            <div class="group" id='4'>Thursday</div>
                        </li>
                        <li class="date">
                            <div class="group" id='5'>Friday</div>
                        </li>
                        <li class="date">
                            <div class="group" id='6'>Saturday</div>
                        </li>
                        <li class="date">
                            <div class="group" id='7'>Sunday</div>
                        </li>
                    </ul>
                </div>

                <button id="sendButton" onClick={handleSubmit}>Send</button>
              
            </body>
        </html>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
