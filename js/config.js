const BirthdayConfig = {
  // Global Settings
  birthdayPersonName: "Princess",
  musicUrl: "0628.mp3", // Custom soundtrack file
  voiceNoteUrl: "", // Optional voice note audio file path (e.g. "assets/audio/voice.mp3")

  // Chapter 2 - Memory Hunt Settings
  correctGiftIndex: 2, // 0-4 index of correct box
  wrongGiftMessages: [
    "ليس هذا 🤭",
    "حاولي مجددا يا أميرة💕",
    "اقتربتِ👀♥️",
    "واصلي البحث🤏🏻"
  ],

  // Chapter 3 - Our Story Timeline Settings
  storyTimeline: [
    {title: "✨ من أين أبدأ؟",
text: `احترتُ... فكيف أبدأ الحديث عن شخصٍ مثلكِ؟
أأبدأ بتهنئتكِ أم أخبركِ كم أنتِ مميزة في حياتي؟
لذلك صنعتُ لكِ هذه الرحلة...
لتهمس لكِ بما عجز قلبي عن قوله.`,
photo: "story/story_1.jpg"
},
{
  title: "لو كان للعناق كلام..♡",
  text: "لقال لكِ: لا يهم كم بيننا من مسافات، فما جمعته الأيام بيننا أكبرُ من أن تفرقه الأماكن.",
  photo: "story/story_2.jpg"
},
{
  title: "ولأنكِ طيبة...",
  text: "كان لا بد أن يكون لكِ مكان صغير يليق بكِ، يحمل شيئًا من الامتنان وكثيرًا من المحبة.",
  photo: "story/story_3.jpg"
},
{
  title: "ولو كان لي دعاء 🌙",
  text: "لدعوتُ الله أن يبقى قلبكِ مطمئنًا... وأن يكتب لكِ سعادة لا تنتهي.",
  photo: "story/story_4.jpg"
},
{
  title: "❤️ لأنكِ تستحقين",
  text: "كل خطوة هنا حملت أمنية صادقة، وكل تفصيل صُنع بمحبة... فقط لأخبركِ أن وجودكِ يعني الكثير ♡",
  photo: "story/story_5.jpg"
},
{
  title: "🎂 والآن...",
  text: "لأن بعض الأشخاص لا تكفيهم تهنئة عابرة... كانت هذه مجرد بداية لما أود قوله لكِ.",
  photo: "story/story_6.jpg"
}
  ],

// Chapter 4 - Birthday Letter Settings
letterText: "كل عام وأنتِ بخير طيوبتي الغالية 🤍 أردتُ أن تصل إليكِ هذه المفاجأة كحضنٍ دافئ يعبر المسافات ويصل إليكِ من خلف الشاشة. لم أرد أن تكون مجرد كلماتٍ عابرة أو تهنئةً تنتهي بانتهاء هذا اليوم، بل أردتُ أن أهديكِ شيئًا يبقى... شيئًا صُنع لكِ وحدكِ، لأنكِ تستحقين أكثر من مجرد «عيد ميلاد سعيد». شكرًا لأنكِ كنتِ وما زلتِ الجزء الجميل من أيامي، ولأن وجودكِ يترك في قلبي أثرًا لا تستطيع الكلمات وصفه. أسأل الله أن يجعل عامكِ الجديد، وكل أعوامكِ القادمة، مليئةً بالطمأنينة والفرح، وأن تُهديكِ الحياة أيامًا طيبة... تشبه اسمكِ، وقلبًا مطمئنًا، وأحلامًا تتحقق، وسعادةً تليق بكِ. عيد ميلادٍ سعيد يا أجمل ما أهدتني الأيام. 🫶🏻",

letterSignature: "wafa♡",

  // Chapter 5 - Surprise Box Settings
  floatingMemories: [
    { caption: "رفيقة الدرب ✨", photo: "surprise/your_smile.jpg" },
    { caption: "معاً دائما", photo: "surprise/that_day.jpg" },
    { caption: "أحبك كثيراً", photo: "surprise/us.jpg" },
    { caption: "نبض واحد 🌙", photo: "surprise/always.jpg" }
  ],

  // Chapter 6 - Ending Text Sequence
  endingLines: [
  "♡أبو الطيب الجميل ",
  "شريك الذكريات والضحكات ♥️🌹",
  "عيد ميلاد سعيد يا أغلى صديقة في قلبي. 🤍",
  "لم تكن هديتي هذا الموقع الصغير...",
  "بل الابتسامة التي تمنيت أن يرسمها على وجهك، وأن تبقى ذكراها في قلبك دائمًا 💕🫂"
]
};
