"use strict";
const fs = require('fs');

const html_prefix = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Usmar A. Padow (amigojapan)’s homepage</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
<div id="container">
	<div id="header">
	    <div id="picture">
            <h1>amigojapan's homepage</h1>
            <h2></h2>
        </div>
    </div>
    <div id="main">
    <div id="leftcol_container">
    	<div class="leftcol">
        	<h2>Programming</h2>
        	<ul>
            	<li><a href="./">My projects</a></li>
				<li><a href="The_pros_and_cons_of_quick_and_dirty_programming.html">Two kinds of programmers</a></li>
				<li><a href="Global_Game_Jam_2017_blog_post.html">Global Game Jam 2017</a></li>
				<li><a href="amigojapans_programming_curriculum.html">my programming curriculum</a></li>
                <li><a href="Japanese_programming_technical_terms.html">Japanese programming technical terms</a></li>
				<li><a href="friends_pages.html">My programmer friends page</a></li>
				<li><a href="8_basics_of_programming.html">8 basics of programming in C and python</a></li>
				<li><a href="8_Code_Katastrophies_that_help.html">8 Code Katastrophies that help</a></li>

            </ul>
        	<h2>Life stories</h2>
            <ul>
	            <li><a href="Padow_family_story.html">Story of the Padow family</a></li>
                <li><a href="Reason_why_I_came_to_Japan.html">The reason why I came to Japan</a></li>
	        <li><a href="Story_of_how_I_met_my_wife.html">The story of how I met my Japanese wife</a></li>
                <li><a href="Method_I_used_to_study_Japanese.html">The method I used to study Japanese</a></li>
	        <li><a href="Classic_funny_moments_in_programming_channel_on_freenode.html">Classic funny moments in ##programming on freenode</a></li>
	        <li><a href="My_unusual_schooling.html">My unusual schooling</a></li>

	    </ul>
        	<h2>Philosophy articles</h2>
        	<ul>

		<li><a href="from_philosophy_to_the_building_blocks_of_computers.html">philosophy to building blocks of computers</a></li>
            	<li><a href="Hypothesis_of_4D_time.html">Hypothesis on 4D time </a></li>
            	<!--add later? <li><a href="#">draft of article on lying</a></li>>-->
            </ul>
        	<h2>Religion</h2>
            <ul>
	        <li><a href="https://www.youtube.com/watch?v=PhAkY-pwUvg">Deconversion from the church of world messianity</a></li>
                <li><a href="Japanese_Haggada">Japanese Haggadah</a></li>
            </ul>
        	<h2>Other</h2>
        	<ul>
				<li><a href="Ideas_for_inventions.html">Ideas for inventions</a></li>
            			<li><a href="Self_quotes.html">Self quotes</a></li>
            			<li><a href="Compilation_of_multiplication_tricks_for_people_with_bad_memory.html">Multiplication tricks for people with bad memory</a></li>
				<li><a href="amigojapan_Usmar_padows_identity_prover.html">Cryptographic identity proof</a></li>
				<li><a href="First_freenode_anime_channel_Tenkaichibudoukai.html">First Tenkaichibudoukai 2016</a></li>
				<li><a href="http://imgur.com/a/ICFvK">My wife's drawings</a></li>
		</ul>

      </div>
      <div class="leftcol_bottom"></div>
      </div>

        <div id="maincol_container">
       		<div class="maincol">`;

const html_suffix = `
			</div>
  </div>
<script type="text/javascript">
window.addEventListener("pageshow", function(evt){
           load();
       }, false);
</script>
</div>
</div>
</body>
</html>`;

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds';
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes';
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours';
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days';
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months';
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years';
    }
}

function time_from_arrival() {
     return timeDifference(new Date, new Date("01/09/2002"))+" (calculated relitavely from October 2002)"
}

function generate() {
    let pages = new Map();
    pages.set('main',
        '\n <div class="maincol">' +
        '\n        	<h2>Introduction</h2>' +
        '\n			<br/>amigojapan is a developer and part time engRish(pun intended) and Spanish teacher that has lived '+ time_from_arrival() +' in Kawaguchi, Saitama Prefecture Japan. Born December 8 1977 in Mexico City, dual national: Mexican and American Citizenship.' +
        '\n			<br/>' +
        '\n			<br/>Projects include:' +
        '\n			<br/><br/><br/><h3>Programming education projects:</h3>' +
        '\n			<br/><br/><br/><a href="/3dpl/">3DPL GE</a> an environment for novice programmers to learn programming(part of my solution for transitioning from block programming to text programming)' +
        '\n			<br/><br/><br/><a href="/s-found/">s-found</a> Visual programming language similar to scratch in HTML5 with real-time-interpretation and generates JavaScript (part of my solution for transitioning from block programming to text programming)' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/m-programmer">m-programmer</a>  a project for beginner programmers to learn how a computers think' +
        '\n			<br/><br/><br/><a href="http://amigojapan.github.com/Logo-Programming-Game/">Logo programming game</a> a game that is simillar to LOGO but in Javascript' +
        '\n			<br/><br/><br/><a href="/maths-from-scratch/">Maths from scratch</a>, an attempt to define math in JavaScript, starting with just counting.' +
        '\n			<br/><br/><br/><h3>Utilities:</h3>' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/Gekijou">Gekijou</a> a tool for making screenplays into youtube videos using voice synthesis' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/LibrePasswordListGenerator/">LibrePasswordListGenerator</a>, Generates a list of passwords based on a master password, and helps you manage which sites they are for. no passwords are stored on the computer' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/ejspeak">ejspeak</a> A project that makes espeak speak Japanese' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/password_lockdown">password_lockdown</a>, Locks a password down so that you can\'t get it until a certain date/time, you can use it to lock down zip file passwords until the time you are ready for people to use them, also good for locking yoruself out of something until a certain time.' +
        '\n			<br/><br/><br/><a href="https://play.google.com/store/apps/details?id=com.usmpadow.MobileRADIDE&amp;hl=en/">Mobile RAD IDE</a>, an IDE for developing Android and iOS apps directly on an Android device' +
        '\n			<br/><br/><br/><a href="http://amigojapan.github.com/web-JavaScript-programmable-scientific-calculator/">JS web programmable scientific calculator</a>' +
        '\n			<br/><br/><br/><a href="http://wiki.unity3d.com/index.php/Linux_system_profiler.bash">Unity3d linux crash system profiler</a>, a tool for gathering information of a system so that you can send a good bug report to the Unity team ' +
        '\n			<br/><br/><br/><a href="/tascam_dr-05_time_calculator/tascam_dr-05_time_calculator.html">tascam dr-05 time calculator</a>, This program will let you set a start time when you start recording, and a mark time, and it will tell you where to look in the files of a tascam dr-50 recorder' +
        '\n			<br/><br/><br/><h3>Human well-being:</h3>' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/BlindOS">BlindOS</a> a program so that blind people can use their computer.' +
        '\n			<br/><br/><br/><a href="/blood_pressure_analyzer.html">Free blood pressure analyzer(uses data from the Mayo Clinic)</a>' +
        '\n			<br/><br/><br/><h3>Hacks:</h3>' +
        '\n			<br/><br/><br/><a href="/Arduino-Retro-Computer-with-SD-card-and-LCD-display-and-Keyboard-input-with-BASIC-interpreter/">The Arduino Retro computers LCD</a> version and <a href="/Arduino-Retro-Computer-TV/">TV Version</a>' +
        '\n			<br/><br/><br/><a href="http://amigojapan.github.com/Arduino-LED-Matrix-Display/">Arduino LED Matrix Display</a>' +
        '\n			<br/><br/><br/><h3>Failed projects:</h3>' +
        '\n			<br/><br/><br/><a href="/Amigojapan-Programming-101-course/AmigojapanProgramming101.html">the amigojapan programming 101 course</a>' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/ajdg">ajdg</a> an attempt at making a better text compression algorithm.' +
        '\n			<br/><br/><br/><h3>old projects:</h3>' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/tom-burger-2">tom burger 2</a> a hamburger shop simulation based on the time I worked for dom dom hamburger' +
        '\n			<br/><br/><br/><a href="https://github.com/amigojapan/Be-Osama">be osama</a> terrorism strategy game' +
        '\n			<br/><br/><br/><a href="http://sandbox.yoyogames.com/games/72683-pachidomi">pachidomi</a> a game that mixes pachinko with a platformer' +
        '\n			<br/>' +
        '\n			<br/> Usmar A Padow (amigojapan), Contact me at usmpadow@gmail.com' +
        '\n			<br/><a href="http://www.bryantsmith.com">web template by web design florida</a>' +
        '\n		</div>' +
"");


    pages.set('quick_and_dirty', '' +
        '        	<h2>Two kinds of programmers, the pros and cons of quick and dirty programming.</h2>' +
        '        	<br/><br/>There are two kinds of intelligence, intuitiveness vs careful planning. in music some composers write down their music, and others just improvise on the spot. I think there are 2 kinds of programmers,  many , maybe most, are of the kind that when compared to a painter, like to sit down with a  ruler and a pencil and slowly draw a picture, making realistic pictures....  and then there are programmers like me,  that when compared with a painter worry more about the end product than how to do the thing... so they may get out a bucket of paint, and slap some on the walls, have dirty newspapers on the floor everywhere(and they end up with some kind of abstract Picasso like painting).. but I think this kind of programming is better for inventive people... probably not for like business or medical applications.....  ' +
        '<br/><br/>When you are working on something new, it is better not to worry about how to do it, and just do it <br/>I would argue the most optimal would be to apply the latter for prototypes and the former for the actual product <br/>I am better at prototypes. I am not really cut out for final products....    I don\'t think it is the same kind of people that do these things....    but often I run into people that say I should be like the painter with the ruler and paint a realistic painting, when I am really aiming for a piccaso like abstract painting' +
        '<br/><br/>I also tend to want to work on new stuff , that hopefully has never been made before... I find boilerplate programming, like making web apps dreadfully boring' +
        '<br/><br/>this:<br/> <img src="images/impossible_stairs.jpg" width=300 /> <br/>versus this: <br/><img src="images/picasso.jpg" width=300/><br/>Both kinds have their rightful place in art' + //by only setting the with it should scale hte hight too, make both pictures the same size'
"");
    pages.set('padow_family', '		<h2>Story of the Padow family</h2>' +
        '		<br/>The Padow family is a family of international Jewish immigrants that come from Lithuania and Poland.' +
        '		We escaped from the tzar who was oppressing the Jews.' +
        '		Back in Lithuania the Padow family name used to be called Ezra. Which became Ezrahovich which apparently for some reason to do with Padua Italy the name was changed' +
        '		to Padovich. When my great grandparents arrived at Elis island.  The authorities did not understand their last name and changed it to Padow.' +
        '		My grand parents Alexander (born 1911 died at age 90) and Lilian (lived 97 years) where born in the United States in New York\'s lower east side and' +
        '		eventually moved to Brooklyn where my father Robert Padow was born. They finally went to live in West Palm Beach FL. My grandfather was a chemist and my' +
        '		grandmother an English teacher. My granparen’s hobby was playing bridge, <a href="http://www.nytimes.com/1986/10/01/nyregion/bridge-young-pair-draws-attention-at-an-event-in-white-plains.html">here is an article in the NY Times about them: </a>' +
        '		<br/>' +
        '		My father (Robert Frank, July 1940 - July 2013) was a piano tuner and aspiring movie writer.  He immigrated to Mexico where he met my' +
        '		mom Gloria, aspiring writer (add links), in the state of Chiapas, my mother\'s home town is San Christobal de las Casas. My parents eventually settled in Mexico' +
        '		City, where I was born the 8th of December, 1977. I lived in Mexico City until I was 19 years old, then I went to west palm beach to study at New England' +
        '		Institute of Technology at Palm Beach where I earned an AS in computer programming technology and started working there after graduation. Meanwhile I studied' +
        '		Japanese for 5 years. I arrived in Japan for a visit in 2001 and finally ended up living in Japan in 2002. I met my wife at a backpaker\'s hotel in Kyoto and we' +
        '		soon got married. Our son was born in December 22, 2003. I have lived in Kawaguchi, Saitama prefecture, Japan for '+ time_from_arrival() +
        '		My wife does not like her name, so we call her "Lynn".  My son is called "Chihiro Alexander"' +
        '		<br/><br/>Please take the time to read my father\'s works which were very valuable to him:' +
        '		<br/>(English) <a href="/dad/Goldmine.pdf">Goldmine in the sky</a>, the tragic story about one of my father\'s friends' +
        '		<br/>(English) <a href="/dad/Guys.pdf">Guys from the avenew</a>, a story about Flatbush Brooklyn NY in the 1950s' +
        '		<br/>(English) <a href="/dad/World.pdf">World corners</a>, an article written by my dad' +
        '		<br/>(Spanish) <a href="/dad/El_Casamiento.pdf">El casamiento de Jovita</a>, play that takes place in Mexico' +
        '		<br/>(SPanish) <a href="/dad/EL_Capitan.pdf">El capitán tiene malos sueños</a>, Spanish adaptation of Nelson Algren\'s "The captain has bad dreams"' +
        '		<br/><br/>Usmar A Padow (amigojapan) usmpadow@gmail.com - 2015' +
"");
    pages.set('reason_came_to_japan', '		<h2>The reason why I came to Japan</h2>' +
        '		<center><img src="/images/eternal sailormoon1_color2_copped.jpg" width="50%" height="50%" /></center>' +
        '		I always tell people not to tell my wife. But my first love is programming, my second love is Sailor Moon. Then people usually ask "what place is your wife?”' +
        '		So yes, I remember when I watched the TV Azteca ad for Sailor Moon, it said it was “The most animated show on TV” and from the moment I saw the flashing' +
        '		colors of the transformation scene, I was in love with the show for life. My favorite part of Sailor Moon is Sailor Stars which I consider to be a masterpiece of art.' +
        '		<br/><br/>' +
        '		So yeah, I wanted to watch Sailor Moon which led to my Studying Japanese so that I could watch the original language version, which lead to getting interested in Japanese culture, which lead me to visit Japan, which lead me to meet my wife, which lead me to live in Japan for '+ time_from_arrival() +
        '		<br/><br/>Sailor Moon drawn by my wife ;)	' +
"");
    pages.set('how_met_wife', '		<h2>The story of how I met my Japanese wife</h2>' +
        '		I came to Japan some time during 2002 for the second time. I stayed at one of my friend’s houses, one day while she was away at work, I stumbled on a festival where they carry the Omikoshi, I was invited to carry the Omikoshi. it was fun,  sometime during that day, I met an American girl. after meeting her a few times, she asked me to go to Kyoto with her, which was not really to my liking at the time because I was into "New Japan” not “Old Japan” back then.  But finally she convinced me to go.  when we got to Kyoto, all the hotels where booked solid, and only one place let us in, that was the Toujian backpacker’s hotel. That night it was way over crowded, they even had people sleeping on the roof(outdoors)…  My friend and I where sent to sleep on the roof, I asked one of the staff members (who ended up being my wife) to please let my friend move to a place that was not the roof. that was the first time I met my wife. One day I heard that she was going back to Saitama, so I asked her for her contact number. She gave it to me thinking I would not call.  But when I went back to the Tokyo area I asked her if I could stay in her house.  She reluctantly let me… About a month later we were married.<br/>Our marriage was just by law, we had a small party at Hotel New Koyo. Later on once our son was grown, we got professional photographs taken of us With Shiromuko Kimono and Hakama.' +
"");
    pages.set('japanese_method', '		<h2>The method I used to study Japanese</h2>' +
        '		Many people ask me this question, so I decided to write about it...' +
        'First off, I was really really lucky to be born in a bilingual home! I did not need to study English or Spanish, 2 of the 3 major world languages! And this may of affected the easiness with which I learnt Japanese. But it all started with my falling in love with Sailor Moon! I wanted to watch it in the original language. That is what got me started, and what kept me enthusiastic about studying Japanese all the way through...' +
        '		<br/><br/>' +
        '		First, I started by buying a random book on how to learn Japanese in Spanish  in the Mexican shop called Sanborns. I can\'t really remember the name of the book, but it was a quite interesting book with a story of a foreigner that gets in trouble with the Yakuza(Japanese mafia).' +
        '		<br/>I ate that book up. I think I learned hiragana in one day, which makes it hard for me to understand why some people have trouble learning hiragana.' +
        '		<br/><br/>' +
        '		Later on I bought the book series called "Japanese for busy people”' +
        '		<br/><br/>' +
        '		I think the most important thing while learning a language is self study and surrounding oneself with the language as much as one can.' +
        '		<br/><br/>' +
        '		While I was living in the US, I studied Japanese for busy people, watched VHS video tapes of Japanese TV shows like “Koko ga hen dazo Nihonjin” (“This is what is weird about you Japanese”) which was a TV show where many foreigners explained what they thought was strange about Japanese culture in a panel full of foreigners that had lived for a long time in Japan.' +
        '		<br/><br/>' +
        '		I also made many Japanese friends, making one friend led to meeting another and another, and even though there is a very small Japanese community in west palm beach, I got to meet many people, and was friendly with them and spoke on a regular basis.' +
        '		<br/><br/>' +
        '		I took Japanese lessons once per week at the Morikami Museum in Boca Raton FL, which is a museum of Japanese culture.' +
        '		<br/><br/>' +
        '		I also got a job in a Japanese restaurant owned by Japanese people just to have a chance to speak it.' +
        '		<br/><br/>' +
        '		Finally, after 5 years of study and '+ time_from_arrival() +' of living in Japan, I am pretty confident that my Japanese is good enough… I have only taken up to the old version of the JLPT level 2. I will try out for N1 some time in the future.' +
        '		<br/><br/>' +
        '		I mostly concentrated on speaking, so that is what I have most confidence in, I have learned how to read Kanji mostly just by all the written stuff around me… and I hang around in freenode’s ##japanese IRC chatroom. I can mostly type Japanese because it is easy to type in roman characters and the computer (or cellphone) will convert it to Kanji. trying to chat on that channel really helps me practice reading and typing Kanji. I am hopeless when it comes to writing Japanese by hand… I can’t remember the characters. I think the book called “Remembering the Kanji" would be a good method for me to learn Kanji well,  but I have been lazy and I gave up after a couple of months.' +
"");
    pages.set('classics', '		<h2>Classic funny moments in ##programming on freenode</h2>' +
        '		<br/><h3>TempleOS</h3>' +
        '		<br/>There is a guy that decided to make an OS from scratch. And not just any OS, but an OS that is a temple dedicated to God. He\'s obviously quite a religious extremist. this is quite an advanced OS, which includes many games and tools for example an IDE which instead of displaying just the filename of a 3d model in the editor, it actually displays the 3d model inside the editor with the code.' +
        '		<br/>The most funny part is that one of the applications that runs inside his OS is a program called Talk to God, which uses an random number generator to get random words from the bible and put them together into sentences in some way,he really believes his application can talk directly to God, he thinks it is a derivative of “Talking in tongues”' +
        '		<br/>this is the link to his OS webpage  <a href="http://www.templeos.org">http://www.templeos.org</a>' +
        '		<br/>but I really recommend you watch <a href="http://www.templeos.org/Wb/Home/Wb2/Videos.html">his videos</a><br/><br/>BTW, we also have the developer of Satan Linux, so maybe they can duel it out some day :)' +
        '		<br/><br/>' +
        '		<br/><h3>Program to do everything</h3>' +
        '		<br/>Some user had the idea that he could make a program that can replace all programs. He said for example a web site for ordering a taxi and a web site for ordering a pizza could all be simplified into a method for ordering anything and this could basically be made into a program that can do anything.' +
        '		<br/>I mentioned to him that we seem to be going in the opposite direction. We have programs that do the same thing on different platforms, like Skype for iPhone and Skype for PC. Or apps to buy goods from Amazon on a smartphone. We will probably make more apps rather than scale down to a single app that does everything.' +
        '		<br/><br/>' +
        '		<br/><h3>Program to translate any programming language to any programming language</h3>' +
        '		<br/>Someone told me that this was actually the same person that had the idea for the “Program to do everything” but I can’t remember their nicknames. this person insisted that he could make a translation program to convert a program written in any programming language to an equivalent program in any other programming language. his main idea was that every program is coupled into opcodes… and he thinks that all opcodes, being codes like that of an encryption algorithm, can be translated from one language to another. so his idea was basically that you wold compile say a C program, his program would read the binary opcodes, and confer that to an equivalent python program that does the same thing.' +
        '		<br/>Needless to say that I mentioned that there are some things that can be done in one programming language and not in another, but it fell on deaf ears.' +
        '		<br/><br/>' +
        '		<br/><h3>The guy with the impossible request</h3>' +
        '		<br/>recap: what engine (must be free and open source)  language must be Java, what IDE, must be easy to program in' +
        '		<br/>as a game engine he refused unreal cause he wanted it to be totally free and open source, he does not want to pay 5% or royalties.' +
        '		<br/>as a language he said it must be java cause "Minecraft in Java.' +
        '		<br/>he even asked what IDE he should use, this is hte moment I thought, he is either too stupid to make a game or he is just trolling.' +
        '		<br/>and he insisted it must be easy to program, finally saying he was going to use LibGDX which I told him was not as easy as unreal or Unity3d.' +
        '		<br/>then he went on to tell me I am a &lt;40 IQ monkey.' +
        '		<br/>also Anika is too strict with Unreal\'s 5% royalty fee,   but he is willing to pay 100 USD per year to the apple app store.' +
        '		<br/>all of this took place in quite broken English.' +
        '		<br/><br/>' +
        '		<br/><h3>The complex image troll</h3>' +
        '		<br/><b>pseudonym:</b>good morning, i have a programming issue today i can be quite elaborate upon, its about taking a large panoramic visual image full of spirals and geometric shapes that change in many ways as it moves from left to right on the image.. i need to reaiize a mathematical solution to describe the image <br/><b>pseudonym:</b>can anybody help please<br/><b>x</b>: what is your dilemma?<br/><b>pseudonym:</b>i need to use computer science to realize the mathematics of the image<br/><b>amigojapan:</b>pseudonym: use LOGO :)    good language for drawing shapes,2D shapes<br/><b>pseudonym:</b>amigojapan im not drawing shapes i need to make a recognition programming using OOP<br/><b>amigojapan:</b>pseudonym: maybe use a Neural Network, they are good  at recognizing images<br/><b>pseudonym:</b>amigojapan, im planing on using OOP<br/><b>amigojapan:</b>maybe glance at the image recognition of neural networks herehttps://developer.nvidia.com/digits<br/><b>pseudonym:</b>amigojapan, its not a major recognition program.. just identify curves spirals etc<br/><b>pseudonym:</b>tho im not doing anything complex<br/><b>amigojapan:</b>you are pseudonym<br/><b>pseudonym:</b>its not a complex image<br/><b>amigojapan:</b>pseudonym: paste the image<br/><b>amigojapan:</b>pseudonym: paste the image,  maybe is there are only a limited number of shapes, you could just compare them to the ones on the other image rotating them in every direction and placing them in every position<br/>•amigojapan suspects the image does not even exist<br/><b>pseudonym:</b>amigojapan, strange speculation and paranoia<br/><b>amigojapan:</b>pseudonym: so why not just paste it here?<br/><b>amigojapan:</b>pseudonym: we have had our share of trolls, and after a while you get good at spotting them<br/><b>amigojapan:</b>things like “I am planning on using OOP”    are red flags, cause obviously OOP is not really related to the problem<br/><b>amigojapan:</b>also, that sounds like you want us to explain how to remake computer vision from scratch pseudonym<br/><b>pseudonym:</b>amigojapan i said i could be elaborate, tho you did say you were not the person to ask, so am ending this duscussion<br/><b>amigojapan:</b>pseudonym: that is an excuse not to past the image, which would be the ovious solution to the acusation of troll<br/><b>pseudonym:</b>amigojapan, i never said i planned on pasting the image<br/><b>amigojapan:</b>ok, I am done. my case is made.<br/><b>pseudonym:</b>amigo japan, your being quite silly now<br/><b>pseudonym:</b>and you actualy seemed to be my freind last time i was in.. im ashamed of you' +
"");
    pages.set('time_hypothesis', '		<h2>Hypothesis of 4D time</h2>' +
        '		<br/>Many people treat the universe as if only 3 spacial dimensions existed and only the present exists with the past somehow magically disappearing and the future not existing until we get there. But, think of a YouTube video, every frame has 3 dimensions, breath, width and hight (z,x,y) but you can also fast forward or rewind in the dimension of time(t), but every frame of the video exists no matter what part of the video we are watching.' +
        '		<br/><br/>' +
        '		<br/>Implications for the direction of time and time travel' +
        '		<br/><br/>' +
        '		<br/>The reason why we may find ourselves always traveling foward in time may be because our bodies and  brains are chemical mechanisms and our experience of time can only happen when the chemical reactions inside our body happen. That is why asking to travel back in time is impossible.  Because the chemical process would need to work in reverse.' +
        '		<br/><br/>' +
        '		<br/>Existentialist implications' +
        '		<br/><br/>' +
        '		<br/>If all of time exists, then we are eternal (while not infinite) beings.  While you are reading this article, there is another you from five minutes ago working his way up to now. And we are working our way up to ourselves that already exists in the future.' +
        '		<br/><br/>' +
        '		<br/>Disprovability: of course we can not prove that the past or the future exist unless we can observe them in some way. We would need a way to prove that the past or future still exist to prove this hypothesis. Observing the future would probably be the best proof because it would not be a reconstruction of the past(but I guess it could be perfect forecast)' +
        '		<br/><br/>' +
        '		<br/>Religious implications' +
        '		<br/><br/>' +
        '		<br/>If the universe has always existed and will always exist. It eliminates the need for a creator. If you argue that we cannot get rid of causality, I would say that you are already proposing a similar thing by saying that "God is an eternal being". As Carl Sagan said "if you propose that God is eternal, why not take a step back and propose that the universe is eternal.”' +
        '		<br/><br/>' +
        '		<br/>Evidence that the past does exist there is no evidence that the past still exists unfortunately, it would seem that everything we know about the past is contained inside the present, like history text books, pictures, etc. all exist only in the present as far as we know.' +
        '		<br/><br/>' +
        '		<br/>True statements about the past are evidence that the past still exists<br/>how can a statement about the past be true if the past does not exist anymore? for example, if I say, I had a burrito for breakfast today,  how can it be a true statement if the event of my eating a burrito no longer exists.' +
        '		<br/><br/>' +
        '		<br/>infinite regress problem' +
        '		<br/>This hypothesis deals with the problem of infinite regression of the universe, which states that “if time is infinite how did we ever get to this point in time when there are an infinite amount of moments between the beginning and now", because this hypothesis does propose that time is infinite but has a beginning that everyone is currently going through one part of time which starts at the beginning and ends at the end. but every part of the trip has always existed.' +
"");
    pages.set('multiplication_tricks', '		<h2>Compilation of Multiplication tricks for people with bad memory from 0X0 to 10X10 without memorization</h2>' +
        '		<br/><br/>' +
        '		<br/>	Chinese multiplication trick that you can do esily using paper' +
        '		<br/>	<iframe width="560" height="315" src="https://www.youtube.com/embed/_AJvshZmYPs" frameborder="0" allowfullscreen></iframe>' +
        '		<br/><br/>' +
        '		<br/>	Using the following tricks you can do all multiplications using either your fingers or small ammounts of tricks' +
        '		<br/>	0 table.  Anything multiplied by 0 is 0' +
        '		<br/><br/>' +
        '		<br/>	1 table. Any number multiplied by 1 is the same number' +
        '		<br/><br/>' +
        '		<br/>	2 times table. Double the number' +
        '		<br/><br/>' +
        '		<br/>	3 times trick on YouTube (tic tac toe board trick), this is the hardest table.' +
        '		<br/>	<iframe width="420" height="315" src="https://www.youtube.com/embed/8b_ghkD8jBE" frameborder="0" allowfullscreen></iframe>' +
        '		<br/>	(another way to do the 3 times table, is to take a number before 3, for example for 5X3, ' +
        '		<br/>	think of 5X2 and add a 5.)' +
        '		<br/>	(another example of this method would be take 7X3, go down to 7X2 and add 7)' +
        '		<br/>	(another way to do it is do the 6 times table and half it for example 6X2 is 12, halfing it results in 6 which is 3X2)' +
        '		<br/><br/>' +
        '		<br/>	4 Times table. Simply, double a number and then double it again' +
        '		<br/><br/>' +
        '		<br/>	5 times. Just show a finger for each number multiplied and add 5 each time' +
        '		<br/>	(or you could multiply by 10 and half if)' +
        '		<br/><br/>' +
        '		<br/>	(Finger trick) Trick for any table from 6x6 to 10x10' +
        '		<br/>	<iframe width="420" height="315" src="https://www.youtube.com/embed/twv-ynv_m9o" frameborder="0" allowfullscreen></iframe>' +
        '		<br/><br/>' +
        '		<br/>	10 times table is the number plus add a zeor, fo 2X10 is 20.' +
        '		<br/><br/>' +
        '		<br/>	One last trick, is that you may choose to use a different trick if the number is not a square (a number times itself) or where both the numbers are over 6X6. for example, instead of using the finger trick for 8X2  you can do 2X8 which should be easier. and the result will be the same.' +
        '		<br/><br/>' +
        '		<br/>	 <a href="http://pastebin.com/2PNMxDYS">click here for More tricks for multiplication and practice tools</a>	' +
"");
    pages.set('ideas', '		<h2>Ideas for inventions</h2>' +
        '		<br/><h3>You may use these ideas, but please credit me in your project prominently.</h3>' +
        '		<br/><br/>' +
        '		<br/>A system that takes some documents and does not reveal the information until after you fail verifying that you are still alive, you decide how many times you want to verify and how often.' +
        '		<br/>May also send emails. But emails change, so I think a central web page would be good.' +
        '		<br/><br/>' +
        '		<br/>USB electric shock device. This device could be used to enhance the experience of games like FPS games to give a reason to avoid careless actions.' +
        '		<br/><br/>' +
        '		<br/>Computer vision for the blind, you could have a device with pins that give a touch feeling of what is being captured by the camera' +
        '		<br/><br/>' +
        '		<br/>Skype ringer, a device that you attach to the Ethernet cable so you can tell someone you want to call them by Skype while keeping your computer off' +
        '		<br/><br/>' +
        '		<br/>Using computer vision to convert an acoustic piano into a midi sequencer' +
        '		<br/><br/>' +
        '		<br/>A reddit for Japan' +
        '		<br/><br/>' +
        '		<br/>A 3d platform 3rd person game where you can drop cubes.  Your own cubes work as protection(maybe buildings) and depending on how many cubes you have piled together you can do different special powers. Like a cutting sword that can kill zombies  and you can blow up your pile of blocks to damage your enemies' +
        '		<br/><br/>' +
        '		<br/>A sound only game that takes you on an adventure through several places of your city to collect hints and objects while unknowingly excersizing.' +
        '		<br/><br/>' +
        '		<br/>Lotto6 number generador where if a winning lottery number is generated we get 20%' +
        '		<br/><br/>' +
        '		<br/>A chat client like line. But also like ms comic chat' +
        '		<br/><br/>' +
        '		<br/>Video game like taiko no tatsujin. Except you try to imitate your opponent\'s key strokes' +
        '		<br/><br/>' +
        '		<br/>p2p web service (gde33)' +
        '		<br/>Programming language that stores the program state and the current line number each cycle and can be brought back to life any time (GDe)' +
        '		<br/>I don\'t understand it very well but GDe was talking about a scheme to let people put up their computers as nodes of the network and say for example, if I serve one HTML I have the right to host HTML' +
        '		<br/><br/>' +
        '		<br/>Wifi router that gives out temporary passwords at a shop (cafe etc) which can only be used after buying something' +
        '		<br/><br/>' +
        '		<br/>A system to confess all your private or illegal secrets which will be kept secret until a time long after you and anyone that can be held responsible can be convicted for it. (What is the point of this? I want eventually any lies I have been telling people, I want the truth to be known, but when it can’t affect me or my family) <br/>Wouldn\'t this just be a time capsule? But there is no guaranty on when and if a time capsule will be opened and read... <br/>relying on lowtech human power seems like the best way to go about this system.<br/>Note:could be misused by people that write lies on it, maybe they want to be worshiped<br/>Maybe it should be kept as encrypted information carved into your tomb stone, it worked for the egyptians for thousands of years. then we would just need to keep the decription key safely, and a society that posts the information in the future, on whatever technology is available then.' +
        '		<br/><br/>' +
        '		<br/>A program like lackeyccg (maybe more simple) for smartphones?' +
        '		<br/><br/>' +
        '		<br/>A kind of visual studio for web applications which allows design the GUI visually and add code to each event (both client side and server side)' +
        '		<br/><br/>' +
        '		<br/>How about a multiplayer platform game where each player is a fighter like in double dragon but it is a free for all (people could perhaps help each other if they want) power recharges at each extreme of the stage could encourage moving from one side to the other)' +
        '		<br/><br/>' +
        '		<br/>Make a game where the only way to get game money is to buy real life items in stores and scan a unique QR code' +
        '		<br/><br/>' +
        '		<br/>What about a system for horses or stocks where we get a large group of people to join. Each person puts in their prediction for which horse will win. Then we sell the future predictions of the top predictor' +
        '		<br/>(May be illegal, but, offer a prize for being right)' +
        '		<br/>Keep the identity of the winners secret' +
        '		<br/><br/>' +
        '		<br/>How about offering higher education for free. But having every educated adult having to volunteer some time to work as a teacher of what he learnt? "Teaching duty" at least the cost of paying professional teachers would go away...and perhaps it would even result in better results because often teachers don\'t have anything but theoretical experience...' +
        '		<br/>On the down side, maybe some people can learn but can\'t teach?' +
        '		<br/><br/>' +
        '		<br/>What about a platformer where you can be good or evil? The life bar goes from dead to alive and if you are good being alive is good but if you are bad then being dead is good? (Got idea in dream)' +
        '		<br/><br/>' +
        '		<br/>A doorbell that asks if you are a salesman or from a religion, then. Unless they lie. It will tell them they are not welcome, and it won\'t ring' +
        '		<br/><br/>' +
        '		<br/>Movie story:' +
        '		<br/>someone like josh Thorpe that needs to do increasingly impossible tasks. One time he has to kill hitler and he can\'t find his gun. So he crashes into his car and dies. It turns out the universe needs someone to do these difficult tasks. They finally find a replacement but it is hard to convince him to do the difficult tasks.' +
        '		<br/><br/>' +
        '		<br/>game using 3dpl engine….   space fortresses. which can be built in space, they use different shapes like crosses, cubes and squares to make different parts of the fortress, like propulsion, weapons and shields. and wire material that is used for connecting the main control panel (controlled as an FPS) to the ship’s systems' +
        '		<br/><br/>' +
        '		<br/>Multi-platform desktop environment, a desktop environment that looks the same on any OS(making usability the same for all OSes with ought the need to install a different OS on each system. should inculude a package manager that includes software that is multi platform like Libre Office for anyone that wants to have the same look an feel on any computer' +
        '		<br/><br/>' +
        '		<br/>How about making a “bible” of what never to do when programming… this could be a Wiki, and be made into a common (for all programming languages) area, and language specific areas' +
        '		<br/><br/>' +
        '		<br/>Game about Hindu astrologi' +
        '		<br/>You are fighting spirits in a lake or the sky.  At first they don\'t mind you because you cannot affect them much... And you can\'t see them... But as you gain experience you get more spiritual powers and are able to attack them more and more.  And see them more and more clearly. You gain experience by something simillar to puyo puyo (just need to put 3 of a kind side by side)' +
        '		<br/><br/>' +
        '		<br/>platformed where you build the levels as you play,you can build and destroy platforms. make  platforms that spawn enemies. this should be a multiplayer game' +
"");
    pages.set('crypto_ids', '		<h2>Cryptographic IDs for proving my identity</h2>' +
        '		<br/><br/>Here is a list of cryptographical IDs that I may need to use some day to prove that I am who I am.' +
        '		<br/><br/>To determine if I am who I am, you need to run a text that I will provide you through a sha512 hasher like this <a href="http://www.miniwebtool.com/sha512-hash-generator/">online sha512 hash Generator</a> if it matches any of my IDs, that means it is me, ofcourse unless my clear text file has been compromised, let\'s hope that is not he case :). <br/><br/>Notes: mostly I am doing this for fun, but you never know when it may be useful, I recommend everyone does this...<br/>I know the IDs look ugly on my html page, I think this is because HTML does not break up a word with no spaces in it...<br/>Also I can\'t take credit for this, I am imitating a friend who did this...<br/><br/>' +
        '		<br/>ID0 is fe3633dce83758a9a750b93cb73a761e751d626e9326188c519fdead7dd1f45bd47615560e7fda1aaa75fe96f1cc9a452fd6d2c6128830114c8c581d5e98ffdf' +
        '		<br/>ID1 is 0eb85db5a851a08d2bfb79b9b89654e5f7e4da0589994cc8b22c174ad8ce081cf6f58d1fd6bca28b51221163ca3fb59b016bbee130e8914fa44a2831f30a15ee' +
        '		<br/>ID2 is 39173e03ec4d62113f202817f0666a72f6318158f4f6d89b36d9e7572ac91056257665e28e5783dbca2b57872e27c4fd25c3a7a1c78fea16c5f692abe360d1c5' +
"");
    pages.set('self_quotes', '\n		<h2>Self quotes</h2>' +
        '\n		<br/><br/>Here is a list of self quotes I have kept stored and am ready to share with the world!.' +
        '\n		<br/><br/>' +
        '\n		<br/><br/><br/>"I could always be wrong is my motto" -- amigojapan' +
        '\n		<br/><br/><br/>"You dont get extra points by being a fanatic" -- amigojapan' +
        '\n		<br/><br/><br/>"Even the most irrational people usually think they are logical thinkers" -- amigojapan' +
        '\n		<br/><br/><br/>"Being honest is a good rule of thumb.   But let\'s say you are an undercover cop trying to catch a murderer.  Revealing your identity because someone asks would be the wrong thing to do" -- amigojapan' +
        '\n		<br/><br/><br/>"Let the people that want to live live.  Let the people who want to die die (support Euthinasia legalization), actually I am having second thoughts on this one, it is a difficult one" -- amigojapan' +
        '\n		<br/><br/><br/>"Don\'t think, then you are thinking like a Windows user :)" -- amigojapan' +
        '\n		<br/><br/><br/>"I often hear the "it is better in [insert newest version of Windows]" I have grown untrustworthy of this claim." -- amigojapan' +
        '\n		<br/><br/><br/>"We have no choice but to live our lives as if we had free will." -- amigojapan' +
        '\n		<br/><br/><br/>"To be trully smart you gotta learn to solve problems that nobody can teach you how to solve." -- amigojapan' +
        '\n		<br/><br/><br/>"science withought the philosophy of sciece is like policemen withought the law” -- amigojapan' +
        '\n		<br/><br/><br/>"using static typing is like tying your shoes before you go out, of course you will save a little time by walking out with unlaced shoes, but if you don\'t do it you will inevitably trip on the laces” -- amigojapan' +
"");
    pages.set('first_tenkaichibudoukai', '' +
        '		<div class="center"><img src="tenkaichibudoukai.jpg" /></div>' +
        '		<h2>First freenode IRC #anime tenkaichibudoukai on Sep. 25 23:00JST  </h2>' +
        '		<br/><br/>' +
        '		<br/><br/>Hey guys, I bare good news :)' +
        '		<br/><br/>Someone just gave me a full collection of Dragon Ball figures!' +
        '		<br/><br/><center><img src="figures_tn.jpg" /></center>' +
        '		<br/><br/><center>see <a href=figures.jpg>full pic</a> here</center>' +
        '		<br/><br/>First we want  people that want the prize to join...' +
        '		<br/><br/>People that want to participate in the contest send email address to usmpadow@gmail.com be sure to send email saying "I want to join the tenkaichibudoukai, &lt;your irc nick&gt;" by  Sep. 25 22:00JST, no entries will be accepted after that' +
        '		<br/><br/>Then join us in #anime on freenode at the time assigned.' +
        '		<br/><br/>I(amigojapan) will give this and pay for the shipping of the package(no guaranties, but I give my word)' +
        '		<br/><br/><h3>the competition will be a tenkaichibudoukai of the #donger game on freenode IRC</h3> <br/>It is a really simple battle game that anyone can easily just participate without much experience. Of course you can practice it before in #donger on freenode. We will first pair up all the competitors to hold the first round, then we will repeat the process of pairing up and competing until there is a clear winner.' +
        '		<br/><br/>Please help promote the competition!' +
        '		<br/><br/>Also would be nice if people could contribute other goods to run future tenkaichibudoukais, if you have something  you want to contribute to a future tenkaichibudoukai, mention it in your email. You will be responsible for sending it to the winner*(this is not a money making tournament, it is just for fun)' +
"");
    pages.set('schooling_story', '		<h2>My unusual schooling</h2>' +
        '		<br/><br/>' +
        '		<br/><br/>My schooling was really strange.' +
        '		<br/><br/>While I was in elementary school I was basically the kid that always looks out the window, and I could not concentrate on classes. I think I could not relate what they were teaching with anything I wanted to do back then.' +
        '		<br/><br/>I basically did not go to normal school from 12 to 19, meantime I went to a computer programming school for adults.' +
        '		<br/><br/>That school only allowed people 18 and up to join, but my mom convinced them to give me a 1 month chance and if I could not keep up I would quit. but I kept up till the end and achieved perfect grades.' +
        '		<br/><br/> Then at 19 I got a GED and went to college at New England Institute of Technology at West Palm Beach.  Unfortunately the West Palm Beach branch does not exist anymore but the main branch does. there I got an AS in computer programming technology and graduated with a 4.0 GPA.' +
        '		<br/><br/>I am not bad at studying either, cause I have achieved besides learning programming, also learning other languages… I just need to be interested in what I study. Also I keep on studying new programming things even now...' +
        '		<br/><br/>I think regular schooling was not designed for people with a personality like mine.' +
"");
    pages.set('Japanese_tech_terms', '		<h2>Technical terms you will need to know to become a programmer in Japan in a Japanese company where you can only speak Japanese</h2>' +
        '		<br/><br/>' +
        '		<br/><br/>Kanji terms:' +
        '		<br/><br/>関数(かんすう,kansuu) is function 変数(へんすう,hensuu) is variable 配列(配列,hairetsu) is array　文字の配列(もじのはいれつ,moji no haiteru) is string 番地(ばんち,banchi) is memory address 鯖(さば,saba) is a joke (there is a fish called saba) means server 演算手順(えんざんてじゅん,enzan tejun) is algorithm　乱数(らんすう,ransuu) is a random number　連結(れんけつ、renketsu) is concatenation' +
        '		<br/><br/>' +
        '		<br/><br/>Katakana terms' +
        '		<br/><br/>Most other terms will be in Katakana and they will be loanwords from english like パソコン (pasokon) short for パーソナル(paasonaru,personal) and コンピューター(conpyuutaa,computer) or just easy to understand words like マウス(mausu, mouse)' +
        '		<br/><br/>' +
        '		<br/><br/>Note, this is not an exahausive list, if you want me to add a term you know, or just want to ask me for some Katakana term, email me at usmpadow@gmail.com' +
"");
    let by_id = new Map();
    by_id.set("",'main');
    by_id.set("The_pros_and_cons_of_quick_and_dirty_programming",'quick_and_dirty');
    by_id.set("Padow_family_story",'padow_family');
    by_id.set("Reason_why_I_came_to_Japan",'reason_came_to_japan');
    by_id.set("Story_of_how_I_met_my_wife",'how_met_wife');
    by_id.set("Method_I_used_to_study_Japanese",'japanese_method');
    by_id.set("Classic_funny_moments_in_programming_channel_on_freenode",'classics');
    by_id.set("Hypothesis_of_4D_time",'time_hypothesis');
    by_id.set("Compilation_of_multiplication_tricks_for_people_with_bad_memory",'multiplication_tricks');
    by_id.set("Ideas_for_inventions",'ideas');
    by_id.set("amigojapan_Usmar_padows_identity_prover",'crypto_ids');
    by_id.set("Self_quotes",'self_quotes');
    by_id.set("First_freenode_anime_channel_Tenkaichibudoukai",'first_tenkaichibudoukai');
    by_id.set("My_unusual_schooling",'schooling_story');
    by_id.set("Japanese_programming_technical_terms",'Japanese_tech_terms');

    for (var q of by_id.keys()) {
        const text = pages.get(by_id.get(q));
        fs.writeFileSync((q.length > 0 ? q : "index") + ".html", html_prefix + text + html_suffix);
    }
	/*
	document.getElementById("mylink").onclick = function() {
		document.getElementById("maincol_container").innerHTML = "";
		document.getElementById('maincol_container').innerHTML = padow_family;
		return false;
	}
	*/

}
generate();
