# Water_Plant_HTML

## How to run: 
The index.html file is the one you want to launch. Right click and open in default browser or 
if you have it open with live Server. The live server extension I used is in shown in the 
Live_server.PNG. 

Once it is launched you can click on any of the buttons however the buttons can only be clicked in 
order. This is because you cannot fill a section of pipes with water if there is no water in the pipes
or tanks before them. For example if you press valve2 but RP1 is not turned on you won't see anything 
happen. 

All of the pumps, tanks, and pressure gauges are clickable and will bring you to a seperate page
(these are the other three html files).

## Things to be improved:
- The pipes and tanks instantly go white when unfilled instead of showing the gradual receeding of water

- The pipes can move and be rearanged however the water paths for each pipe will not adapt with them. 
Although I beleive this could be changed but would require a lot more time and work.

- If you use the info on this website:

https://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh

You should be able to store values in the JS file so that refreshes and changing pages doesn't 
refresh your variables. I implemented this with the water psi gauges


## These are the unused pipes in this system:

### **Pipe 4**
    <style>
        .cls-4{fill:none;stroke:#231f20;stroke-linejoin:round;stroke-width:3.5px;}
    </style>

    <g class="pipe4">
        <rect class="cls-4" x="20.95" y="1.75" width="23.4" height="12"/>
        <rect class="cls-4" x="12.7" y="43.37" width="23.4" height="12" transform="translate(-41.63 55.85) rotate(-90)"/>
        <rect class="cls-4" x="61.9" y="43.38" width="23.4" height="12" transform="matrix(0, -1, 1, 0, 7.57, 105.05)"/>
        <path class="cls-4" d="M42.4,68.13V62.27c0-3.9-1-6.6-5.7-6.6H30.4V43.07h6.3c4.65,0,5.7-2.7,5.7-6.6V31.68H55.6v4.79c0,3.9,1,6.6,5.7,6.6h6.3V55.67H61.3c-4.65,0-5.7,2.7-5.7,6.6v5.85Z" 
            transform="translate(-16.65 -17.92)"/>
        <rect class="cls-4" x="20.95" y="50.2" width="23.4" height="12"/>
    </g>


### **Pipe 6**
    <style>
    .cls-8{fill:none;stroke:#231f20;stroke-linejoin:round;stroke-width:3.5px;}
    </style>

    <g class="pipe6">
        <rect class="cls-8" x="20.95" y="1.75" width="23.4" height="12"/>
        <rect class="cls-8" x="12.7" y="52.9" width="23.4" height="12" transform="translate(-51.15 55.85) rotate(-90)"/>
        <rect class="cls-8" x="61.9" y="52.9" width="23.4" height="12" transform="matrix(0, -1, 1, 0, -1.95, 105.05)"/>
        <path class="cls-8" d="M67.6,67.75H30.4V52.6h6.3c4.65,0,5.7-2.7,5.7-6.6V41.2H55.6V46c0,3.9,1,6.6,5.7,6.6h6.3Z" transform="translate(-16.65 -27.45)"/>
    </g>

### **Pump 1**
    <style>
    .cls-17{fill:none;stroke:#231f20;stroke-linejoin:round;stroke-width:3.5px;}
    .cls-18{fill:none;stroke:#231f20;stroke-linejoin:round;stroke-width:3px;}
    .cls-19{stroke:#231f20;stroke-linejoin:round;fill:#ec1c24;stroke-width:1.46px;}
    .cls-20{fill:#231f20;}
    </style>

    <g class="pump1">
        <path class="cls-17" d="M53.56,80.6a18.18,18.18,0,1,1,0,1.2V35.1h-16V71.4l-.07,9.83a34,34,0,1,0,16.12-29Z" transform="translate(-30.72 -25.48)"/>
        <circle class="cls-17" cx="71.7" cy="81.22" r="18.15" transform="translate(-66.84 66.42) rotate(-54.22)"/>
        <circle class="cls-18" cx="40.97" cy="55.75" r="10.8"/>
        <line class="cls-19" x1="40.97" y1="89.5" x2="40.97" y2="22.11"/>
        <line class="cls-19" x1="70.15" y1="72.65" x2="25.34" y2="46.86"/>
        <line class="cls-19" x1="70.15" y1="38.96" x2="25.34" y2="65.09"/>
        <circle class="cls-20" cx="40.97" cy="55.75" r="5.25"/>
        <rect class="cls-17" x="1.75" y="1.75" width="26.25" height="7.87"/>
    </g>

### **Pump 3**
    <style>
    .cls-24{fill:none;stroke:#231f20;stroke-linejoin:round;stroke-width:3.5px;}
    .cls-25{fill:#ec1c24;stroke:#231f20;stroke-linejoin:round;stroke-width:1.46px;}
    .cls-26{fill:none;stroke:#231f20;stroke-linejoin:round;stroke-width:1.46px;}
    </style>

    <g class="pump3">
        <path class="cls-24" d="M70.18,82.49a18.17,18.17,0,1,1,1.2,0H24.68v16H61l9.82.07a34,34,0,1,0-29-16.12Z" transform="translate(-15.05 -28.77)"/>
        <path class="cls-24" d="M99.65,82.67a34,34,0,0,1-28.85,16l1.25.08h40.23V82.61h-11.8Z" transform="translate(-15.05 -28.77)"/>
        <circle class="cls-24" cx="70.8" cy="64.35" r="18.15" transform="translate(-37.85 55.38) rotate(-54.22)"/>
        <rect class="cls-24" x="7.61" y="86.66" width="26.25" height="7.87" transform="translate(-84.91 82.56) rotate(-90)"/>
        <rect class="cls-24" x="103.09" y="86.62" width="26.25" height="7.88" transform="translate(191.73 -54.42) rotate(90)"/>
        <line class="cls-25" x1="50.8" y1="35.65" x2="22.11" y2="35.65"/>
        <line class="cls-25" x1="53.05" y1="40.15" x2="46.86" y2="51.29"/>
        <line class="cls-25" x1="58.34" y1="39.81" x2="65.09" y2="51.29"/>
        <circle class="cls-26" cx="55.75" cy="35.65" r="5.25"/>
        <line class="cls-25" x1="89.27" y1="35.65" x2="60.59" y2="35.65"/>
        <line class="cls-25" x1="63.85" y1="19.9" x2="57.66" y2="31.04"/>
        <line class="cls-25" x1="46.41" y1="19.22" x2="53.16" y2="30.7"/>
    </g>

### **Pump 4**
    <style>
        .cls-27{fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:3px;}
        .cls-28{fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:2px;}
        .cls-29{fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:3.5px;}
        .cls-30{fill:none;stroke:#231f20;stroke-width:3.5px;stroke-miterlimit:10;stroke-linecap:round;}
        .cls-31{fill:#231f20;}
        .cls-32{fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:2px;stroke-linecap:round;}
        .cls-33{fill:none;stroke:#231f20;stroke-linejoin:round;stroke-width:3.5px;}
    </style>

    <g class="pump4">
        <path class="cls-27" d="M49.1,105.23" transform="translate(-17.85 -23.04)"/>
        <path class="cls-27" d="M49.1,77.55" transform="translate(-17.85 -23.04)"/>
        <line class="cls-28" x1="43.79" y1="10.81" x2="60.11" y2="10.81"/>
        <rect class="cls-29" x="43.63" y="1.75" width="45" height="50.29" rx="4"/>
        <line class="cls-28" x1="43.79" y1="10.81" x2="88.51" y2="10.81"/>
        <line class="cls-28" x1="43.79" y1="43.77" x2="88.51" y2="43.77"/>
        <line class="cls-28" x1="54.48" y1="11.59" x2="54.48" y2="44.56"/>
        <line class="cls-28" x1="62.48" y1="11.59" x2="62.48" y2="44.56"/>
        <line class="cls-28" x1="70.48" y1="11.59" x2="70.48" y2="44.56"/>
        <line class="cls-28" x1="78.48" y1="11.59" x2="78.48" y2="44.56"/>
        <rect class="cls-29" x="50.04" y="52.04" width="31.84" height="6.86"/>
        <rect class="cls-30" x="43.63" y="85.9" width="45" height="6.98"/>
        <rect class="cls-29" x="50.04" y="78.14" width="31.84" height="7.76"/>
        <rect class="cls-31" x="53.8" y="82.07" width="5.18" height="2.48"/>
        <rect class="cls-31" x="63.46" y="82.07" width="5.17" height="2.48"/>
        <rect class="cls-31" x="72.94" y="82.07" width="5.18" height="2.48"/>
        <line class="cls-28" x1="1.96" y1="52.32" x2="18.27" y2="52.32"/>
        <line class="cls-28" x1="2.18" y1="55.92" x2="18.49" y2="55.92"/>
        <line class="cls-28" x1="1.96" y1="48.72" x2="18.27" y2="48.72"/>
        <path class="cls-32" d="M55.16,96.28a9,9,0,0,1-1.22-4.55h0a9.14,9.14,0,0,1,9.11-9.11h0" transform="translate(-17.85 -23.04)"/>
        <path class="cls-29" d="M41.41,101.18H34.49c-7.2,0-14.89-7.09-14.89-17.22V67.39h16V77.9c0,3.52,2.55,4,4.69,4h1.07Z" transform="translate(-17.85 -23.04)"/>
        <path class="cls-29" d="M49.29,81.94H107a9.62,9.62,0,0,1,0,19.24H49.29Z" transform="translate(-17.85 -23.04)"/>
        <rect class="cls-33" x="32.23" y="87.51" width="26.25" height="7.87" transform="translate(-63.95 113.76) rotate(-90)"/>
    </g>



