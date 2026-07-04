/**
 * SQ PLATFORM - MYSTERIOUS YELLOW GLOW EDITION (SADQ)
 * واجهة دخول: اسم باللون الأصفر الصافي مع توهج أصفر غامض بالخلفية وصورة طبيعية
 */

const splashStyles = `
    #sq-splash-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: opacity 1s ease-out;
    }

    .logo-wrapper {
        position: relative;
        width: 450px !important; 
        height: 310px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        overflow: hidden;
    }

    .user-3d-avatar {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        z-index: 3;
        /* الصورة طبيعية تماماً بدون أي مؤثرات */
    }

    /* 🌟 الاسم باللون الأصفر الصافي مع التوهج الأصفر الغامض والمتحرك خلفه 🌟 */
    .brand-name-glow {
        font-family: 'Impact', 'Arial Black', sans-serif;
        font-size: 85px; 
        font-weight: 900;
        text-align: center;
        margin-bottom: 45px;
        letter-spacing: 12px;
        z-index: 5;
        text-transform: uppercase;
        color: #FFFF00; /* أصفر صافي */
        position: relative;
        
        /* طبقات التوهج الأصفر الغامق المحيطة بالحروف لإعطاء عمق غامض */
        text-shadow: 
            0 0 10px rgba(204, 163, 0, 0.6),
            0 0 20px rgba(179, 143, 0, 0.5),
            0 0 40px rgba(128, 102, 0, 0.4),
            0 0 60px rgba(77, 61, 0, 0.3);
            
        animation: mysteriousGlow 2s ease-in-out infinite alternate;
    }

    .loader-container {
        width: 320px;
        height: 4px;
        background: #1a1a1a;
        border-radius: 4px;
        overflow: hidden;
        position: relative;
    }

    .loader-bar {
        width: 0%;
        height: 100%;
        background: #FFFF00;
        box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
        transition: width 0.1s linear;
    }

    .loader-text {
        color: #b39f00;
        font-size: 11px;
        margin-top: 12px;
        font-family: monospace;
        letter-spacing: 3px;
    }

    /* أنيميشن نبض التوهج الغامض لخلفية الاسم */
    @keyframes mysteriousGlow {
        0% {
            text-shadow: 
                0 0 10px rgba(204, 163, 0, 0.6),
                0 0 25px rgba(179, 143, 0, 0.5),
                0 0 45px rgba(128, 102, 0, 0.4);
            transform: scale(0.99);
        }
        100% {
            text-shadow: 
                0 0 15px rgba(255, 204, 0, 0.8),
                0 0 35px rgba(204, 163, 0, 0.7),
                0 0 65px rgba(153, 122, 0, 0.5),
                0 0 85px rgba(102, 81, 0, 0.3);
            transform: scale(1.01);
        }
    }
`;

const splashStyleTag = document.createElement("style");
splashStyleTag.innerText = splashStyles;
document.head.appendChild(splashStyleTag);

function createSplashScreen() {
    const splash = document.createElement("div");
    splash.id = "sq-splash-container";
    
    splash.innerHTML = `
       <div class="logo-wrapper">
    <img src="SADQ.jpeg" class="user-ld-avatar" alt="SQ Logo" onerror="this.src='SADQ.jpeg'">
</div>
        
        <!-- الاسم مع التوهج الأصفر الغامض خلفه -->
        <div class="brand-name-glow">SADQ</div>

        <div class="loader-container">
            <div class="loader-bar" id="sq-loader-progress"></div>
        </div>
        <div class="loader-text" id="sq-loader-status">INITIALIZING SYSTEM... 0%</div>
    `;
    
    document.body.appendChild(splash);
    startSplashLoader();
}

function startSplashLoader() {
    let progress = 0;
    const progressBar = document.getElementById("sq-loader-progress");
    const progressText = document.getElementById("sq-loader-status");
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 2;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                const container = document.getElementById("sq-splash-container");
                if (container) {
                    container.style.opacity = "0";
                    setTimeout(() => container.remove(), 1000);
                }
            }, 600);
        }
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (progressText) progressText.innerText = `INITIALIZING SYSTEM... ${progress}%`;
    }, 70);
}

document.addEventListener("DOMContentLoaded", createSplashScreen);