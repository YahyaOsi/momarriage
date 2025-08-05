// --- DOM Elements ---
const resultsContainer = document.getElementById('results-container');
const usernameInput = document.getElementById('username-input');
const findMatchBtn = document.getElementById('find-match-btn');
const btnText = document.getElementById('btn-text');
const btnSpinner = document.getElementById('btn-spinner');
const tryAgainBtn = document.getElementById('try-again-btn');
const shareBtn = document.getElementById('share-btn');
const errorMessage = document.getElementById('error-message');
const confettiContainer = document.getElementById('confetti-container');

// --- Results Card Elements ---
const matchCard = document.getElementById('match-card');
const compatibilityScoreEl = document.getElementById('compatibility-score');
const matchedUsernameEl = document.getElementById('matched-username');
const resultDetailsEl = document.getElementById('result-details');
const matchTitleEl = document.getElementById('match-title');
const matchDescriptionEl = document.getElementById('match-description');

// --- Data ---
const communityMembers = [
    "_gvan","_jhunsaker","_kate_lv","_Seven7777777","0x_Abdul","0x_Capas","0x_Deus","0x_nada_","0x_xifeng","0x_yash21","0x70626a","0xAmne","0xArich","0xBANDAL","0xBlueLou","0xbobaa","0xDanielx","0xGleader","0xGrimjow","0xKareemo","0xMimie","0xpotatoking","0xRabit","0xSachy","0xSkilly","0xtequilaa","0xVikrew","0xZeydd","1Cilineth","1stBenjaNAD","2red","420420psycho","4ormund","ackenn_","AdibS335079","akbacrypto","AlexiosKonstan","AlexxDumii","Amr_mousa11","andalfthegreat","ander__non","Antiboomchik","AnubisEgx","ash6705","Auri_0x","awhisperx","ayiipwashere","aztheknight","Babayaga4487_","Bakasenchou015","bakbar8519","barrybutterhand","Bassa_Walker","bdwhale","be_kindplss","Beans_xyz","berzanorg","bigchogenergy1","BirckMega","blocash_","boregrox808","BoxMrChen","boyhendryko","brave_raf","brocoliwang","Buja_Quest","buntyverse","burking19","Cassini0x","celiinneey","ChaosWalk3r","chiefyappoot","Chikuu1314","ChocoXXXI","chopperstate1","clawnad9","comingsun_","CosmaCloud","cozymaximalist","CrcCryp","crexsol","cryptunez","cyphherweb","dagee___","DancingEddie_","dannyweb33","day_dream1007","depskydeps","Dodori4390","Dreiki10","edlockbs","Edward__Park","emil_pepil","EmpireOP11","endgamemz","Erikcrty","Erkinovski","EthLdgr","Eviltahaa","Evoyudhasamael","faizydroid","felixleeSimp","Ferfer9992","FirexGon","FishMarketAcad","Foysal161451","fury8413","Gab__Df","GhazwanAli18","gizdusumandnode","Hagen_web3","HarinLike","haruharuwuu","harumineko0130","hatwifcookie","HavoMartinez","HDshoq","HeadphoneSolsal","HhhhHannah","I_m_Maria_","ice_bearcute","immaUF","intern","internbrah","isseign","itsnacho79","iwillalllowit","JeffNot_Bezos","jeneyalex","jiabtc","JohnWRichKid","jsolanamaja","juju5373","just1collins","jusup11","Juump_00","Kapi_Indra","kenobi_mon","Keybiii_","KGdotmon","kicklee88","kimchiii0319","KinglouiEth","koza_bobr","krito_carde","kryptobaby777","lambe1981","Lblaeyz21","lbtc200","leonardo_evmacc","lethx69","Lewis8888888","leysbobr","likiditeekleyen","lora0185","lulu70191243","m0neyy35","MadVincent666","MahTrader13","MaxgraphX","maxyung13","md_sharif169","mdudas","medusa_apple","meekybillz__","mikeinweb","MikksuPehk49401","MLDejahThoris","momoflisa_21","mon_sasuke","monasex_1","mongdiny7","moxley_25","mrbigtune","mxryboo","myway10041004","n0_vist","naruto11eth","NianNyeet","nikawmvmnt","NikkiSixx_7","nimonoo1970","nizisol","NoeySmile18","NotAMai_","notlyxeH","nquang_2610","oak_xyz","Old_6_","omo_oshodi_","oofwear","opendanny","orpheuzkaze","ozzyxbt","pablocikaso2","paulnguyen_z2z","ped_is_ram","Peterpanzeri","port_dev","possiblyspam","puresoul0109","qmb1O_o","realschism","Reborn_1998","reinnonly","retardedquant_","retrodiskotek","ronansavazy","rosinxyz","rsklwtf","rxmvnl88","s0urc3es","SaamzzMonad","SaddamWeb3","safas4461319","SamZNFT","senqieee28","sirceen","Skaivii","SmolMobster","snowie901","solhitman","sophiekornchip","sparkwang9","sungmo_nad","Sunonphyse","Sushi_simps","sweets5ri","T_Batowski","tanvirt11t","tbeagle1903","temiace22","thedroper123","thinkisick","ThogardPvP","Toadster69","totomal090202","traderada_","turudq","vasdie","velicko_aleksej","venti_nft","virende54","Vodkla_Brave","wabdoteth","wagmigently","weretiny","widzeth","wyckoffweb","xmohammedahmed","YahyaOsi","Yotdanz","yuki__app","Yusuphh01","zayn4pf","Zeck_Sol", "God_f_a_ther"
];

const matchTiers = {
    legendary: { title: "Monad Pair ✨💜", description: "A magical connection with unstoppable Monad energy and vibes, you two shine like a power couple.", color: "#FFD700" },
    epic: { title: "Purple Protocol Pair 🔮", description: "Both of you hold your love strong, no paper hands here.", color: "#00C9FF" },
    rare: { title: "Monad Makers 🏗", description: "You both want to build something amazing on Monad, maybe even a little baby?", color: "#E0B1CB" },
    uncommon: { title: "Just Friends? 💜", description: "You both laugh at the same memes and vibe with Monad. Just friends? Yeah, sure, keep telling yourself that.", color: "#39FF14" },
    common: { title: "Mystic Tangle 🌸", description: "Charts look like they just lost a game, but hey, love might still win this round.", color: "#FF4500" }
};

let currentMatch = {};

// --- Event Listeners ---
findMatchBtn.addEventListener('click', handleFindMatch);
tryAgainBtn.addEventListener('click', handleTryAgain);
shareBtn.addEventListener('click', handleShare);
// Allow pressing Enter to submit
usernameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleFindMatch();
    }
});

/**
 * Determines the match tier based on the compatibility score.
 * @param {number} score - The compatibility score (0-100).
 * @returns {object} The tier object with title, description, and color.
 */
function getMatchTier(score) {
    if (score >= 95) return matchTiers.legendary;
    if (score >= 85) return matchTiers.epic;
    if (score >= 70) return matchTiers.rare;
    if (score >= 55) return matchTiers.uncommon;
    return matchTiers.common;
}

/**
 * Animates text with a typing effect.
 * @param {HTMLElement} element - The element to animate.
 * @param {string} text - The text to type out.
 * @param {function} callback - A function to call after the animation completes.
 */
function typeEffect(element, text, callback) {
    let i = 0;
    element.innerHTML = "";
    element.classList.add('typing-cursor');
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.classList.remove('typing-cursor');
            if (callback) callback();
        }
    }, 100); // Typing speed in ms
}

/**
 * Main logic for finding a match, triggered by the button click.
 */
function handleFindMatch() {
    let userInput = usernameInput.value.trim().replace('@', '');
    if (!userInput) {
        errorMessage.textContent = 'Please enter your X username.';
        usernameInput.classList.add('border-red-500');
        return;
    }
    errorMessage.textContent = '';
    usernameInput.classList.remove('border-red-500');

    // Show loading state
    findMatchBtn.disabled = true;
    btnText.classList.add('hidden');
    btnSpinner.classList.remove('hidden');

    // Find a random match and calculate score
    const matchedUser = getRandomMatch(userInput);
    const score = Math.floor(Math.random() * (99 - 40 + 1)) + 40;
    const tier = getMatchTier(score);
    currentMatch = { user: userInput, match: matchedUser, score, tier };

    // Simulate a short delay for effect
    setTimeout(() => {
        // Show the results container
        resultsContainer.classList.remove('hidden');

        // Start the reveal sequence
        typeEffect(matchedUsernameEl, `@${matchedUser}`, () => {
            // Once typing is done, reveal the rest of the details
            matchTitleEl.textContent = tier.title;
            matchTitleEl.style.color = tier.color;
            matchDescriptionEl.textContent = tier.description;
            compatibilityScoreEl.textContent = `Compatibility: ${score}%`;
            matchCard.style.boxShadow = `0 0 30px ${tier.color}80`; // Update glow color

            resultDetailsEl.classList.remove('opacity-0');
            startConfetti();
        });

        // Reset button state
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
    }, 750);
}

/**
 * Resets the application to the initial state.
 */
function handleTryAgain() {
    stopConfetti();
    resultsContainer.classList.add('hidden');

    // Reset the result card for the next round
    setTimeout(() => {
        usernameInput.value = '';
        findMatchBtn.disabled = false;
        resultDetailsEl.classList.add('opacity-0');
        matchedUsernameEl.innerHTML = "&nbsp;"; // Reset text
        matchCard.style.boxShadow = `0 0 30px var(--glow-color-lavender)`; // Reset glow
    }, 500); // Wait for fade out
}

/**
 * Opens a new Twitter intent window to share the match.
 */
function handleShare() {
    const { user, match, score, tier } = currentMatch;
    const text = `I found my Monad soulmate with the Monad community marriage tool! 💍\n\nMe (@${user}) + @${match} are... ${tier.title} with ${score}% compatibility!\n\nFind your Monad soulmate here: https://momarriage.vercel.app/`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
}

/**
 * Selects a random user from the community list, ensuring it's not the current user.
 * @param {string} currentUser - The username of the person using the tool.
 * @returns {string} The username of the matched person.
 */
function getRandomMatch(currentUser) {
    const potentialMatches = communityMembers.filter(member => member.toLowerCase() !== currentUser.toLowerCase());
    if (potentialMatches.length === 0) return "monad_xyz"; // Fallback if user enters a name from the list
    const randomIndex = Math.floor(Math.random() * potentialMatches.length);
    return potentialMatches[randomIndex];
}

/**
 * Creates and animates confetti particles for a celebration effect.
 */
function startConfetti() {
    confettiContainer.innerHTML = ''; // Clear previous confetti
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        confettiContainer.appendChild(confetti);
    }
}

/**
 * Removes all confetti particles.
 */
function stopConfetti() {
    confettiContainer.innerHTML = '';
}