// 音频数据 - 这里需要你根据实际文件修改
// 音频数据
const audioData = {
    "米小圈四年级-来自未来的我": [
        { name: "可怕的暑假作业", file: "audios/13.来自未来的我/01可怕的暑假作业.mp3" },
        { name: "新学期新气象", file: "audios/13.来自未来的我/02新学期新气象.mp3" },
        { name: "民主选同桌", file: "audios/13.来自未来的我/03民主选同桌.mp3" },
        { name: "美术班的小胖子", file: "audios/13.来自未来的我/04美术班的小胖子.mp3" },
        { name: "一整天都倒霉", file: "audios/13.来自未来的我/05一整天都倒霉.mp3" },
        { name: "小舅舅来了", file: "audios/13.来自未来的我/06小舅舅来了.mp3" },
        { name: "一封奇怪的信", file: "audios/13.来自未来的我/07一封奇怪的信.mp3" },
        { name: "我写给米大圈的信", file: "audios/13.来自未来的我/08我写给米大圈的信.mp3" },
        { name: "又一封古怪的", file: "audios/13.来自未来的我/09又一封古怪的.mp3" },
        { name: "三条预言", file: "audios/13.来自未来的我/10三条预言.mp3" },
        { name: "得意的小胖子", file: "audios/13.来自未来的我/11得意的小胖子.mp3" },
        { name: "开始努力", file: "audios/13.来自未来的我/12开始努力.mp3" },
        { name: "米大圈的鼓励", file: "audios/13.来自未来的我/13米大圈的鼓励.mp3" },
        { name: "绘画比赛", file: "audios/13.来自未来的我/14绘画比赛.mp3" },
        { name: "弥天大谎", file: "audios/13.来自未来的我/15弥天大谎.mp3" },
        { name: "不想理你", file: "audios/13.来自未来的我/16不想理你.mp3" },
        { name: "你真的是米大圈吗", file: "audios/13.来自未来的我/17你真的是米大圈吗.mp3" },
        { name: "获奖", file: "audios/13.来自未来的我/18获奖.mp3" }
    ],
    "儿歌": [
        // 这里可以添加其他文件夹的音频
    ],
    "故事": [
        // 这里可以添加其他文件夹的音频
    ],
    "英语": [
        // 这里可以添加其他文件夹的音频
    ],
    "国学": [
        // 这里可以添加其他文件夹的音频
    ]
};

let currentAudio = document.getElementById('audioPlayer');
let currentPlayBtn = document.getElementById('playBtn');
let currentList = [];

// 显示对应文件夹的音频列表
function showAudios(folder) {
    const audioList = document.getElementById('audioList');
    currentList = audioData[folder] || [];
    
    if (currentList.length === 0) {
        audioList.innerHTML = '<p>这个文件夹还没有音频哦</p>';
        return;
    }
    
    let html = `<h3>${folder}</h3>`;
    currentList.forEach((audio, index) => {
        html += `
            <div class="audio-item" onclick="playAudio(${index})">
                ${audio.name}
            </div>
        `;
    });
    audioList.innerHTML = html;
}

// 播放音频
function playAudio(index) {
    if (currentList[index]) {
        currentAudio.src = currentList[index].file;
        currentAudio.play();
        currentPlayBtn.textContent = '⏸️ 暂停';
    }
}

// 播放/暂停控制
function playPause() {
    if (currentAudio.paused) {
        currentAudio.play();
        currentPlayBtn.textContent = '⏸️ 暂停';
    } else {
        currentAudio.pause();
        currentPlayBtn.textContent = '▶️ 播放';
    }
}

// 停止音频
function stopAudio() {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentPlayBtn.textContent = '▶️ 播放';
}

// 音量控制
function volumeUp() {
    if (currentAudio.volume < 1) {
        currentAudio.volume = Math.min(1, currentAudio.volume + 0.1);
    }
}

function volumeDown() {
    if (currentAudio.volume > 0) {
        currentAudio.volume = Math.max(0, currentAudio.volume - 0.1);
    }
}

// 自动预加载（可选）
document.addEventListener('DOMContentLoaded', function() {
    showAudios('儿歌'); // 默认显示儿歌文件夹
});

// 音频播放结束事件
currentAudio.addEventListener('ended', function() {
    currentPlayBtn.textContent = '▶️ 播放';
});