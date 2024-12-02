const hmscoreEl = document.getElementById('home-score');
const awscoreEl = document.getElementById('away-score');

let hmscore = 0;
let awscore = 0;

hmscoreEl.textContent = hmscore;
awscoreEl.textContent = awscore;

function updateTrophy() {
    if (hmscore > awscore) {
        const el = document.getElementById('home-team');
        el.querySelector('h3').textContent = 'Home🏆';
    } else if (hmscore < awscore) {
        const el = document.getElementById('away-team');
        el.querySelector('h3').textContent = 'Away🏆';
    } else {
        document.getElementById('home-team').querySelector('h3').textContent = 'Home';
        document.getElementById('away-team').querySelector('h3').textContent = 'Away';
    }
}

function away_one() {
    awscore++;
    awscoreEl.textContent = awscore;
    updateTrophy();
}

function away_two() {
    awscore += 2;
    awscoreEl.textContent = awscore;
    updateTrophy();
}

function away_three() {
    awscore += 3;
    awscoreEl.textContent = awscore;
    updateTrophy();
}

function home_one() {
    hmscore++;
    hmscoreEl.textContent = hmscore;
    updateTrophy();
}

function home_two() {   
    hmscore += 2;
    hmscoreEl.textContent = hmscore;
    updateTrophy();
}

function home_three() {
    hmscore += 3;
    hmscoreEl.textContent = hmscore;
    updateTrophy();
}

