const fs = require('fs');
const path = require('path');

const techQuestions = [
    { q: "भारत का पहला स्वदेशी सुपरकंप्यूटर कौन सा है?", a: "परम 8000", options: ["परम 8000", "प्रत्यूष", "मिहिर", "आदित्य"] },
    { q: "इसरो (ISRO) का मुख्यालय कहाँ स्थित है?", a: "बेंगलुरु", options: ["बेंगलुरु", "नई दिल्ली", "श्रीहरिकोटा", "तिरुवनंतपुरम"] },
    { q: "दुनिया का पहला कंप्यूटर प्रोग्रामर किसे माना जाता है?", a: "एडा लवलेस", options: ["एडा लवलेस", "चार्ल्स बैबेज", "एलन ट्यूरिंग", "ग्रेस हॉपर"] },
    { q: "चंद्रयान-3 मिशन के रोवर का क्या नाम है?", a: "प्रज्ञान", options: ["प्रज्ञान", "विक्रम", "आदित्य", "कलाम"] },
    { q: "आदित्य L1 मिशन किस खगोलीय पिंड के अध्ययन के लिए भेजा गया है?", a: "सूर्य", options: ["सूर्य", "चंद्रमा", "मंगल", "शुक्र"] },
    { q: "कंप्यूटर में 'RAM' किस प्रकार की मेमोरी है?", a: "अस्थायी (Volatile)", options: ["अस्थायी (Volatile)", "स्थायी (Non-Volatile)", "कैश", "वर्चुअल"] },
    { q: "निम्नलिखित में से कौन सा एक ऑपरेटिंग सिस्टम नहीं है?", a: "MS Office", options: ["MS Office", "Windows", "Linux", "Android"] },
    { q: "URL का पूर्ण रूप क्या है?", a: "Uniform Resource Locator", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Link", "Universal Reference Locator"] },
    { q: "ब्लूटूथ (Bluetooth) का आविष्कार किस कंपनी ने किया था?", a: "एरिक्सन", options: ["एरिक्सन", "नोकिया", "सैमसंग", "मोटोरोला"] },
    { q: "इंटरनेट का जनक (Father of Internet) किसे कहा जाता है?", a: "विंट सर्फ", options: ["विंट सर्फ", "टिम बर्नर्स-ली", "बिल गेट्स", "मार्क जुकरबर्ग"] },
    { q: "5G नेटवर्क किस फ्रीक्वेंसी बैंड पर काम करता है?", a: "सब-6 GHz और mmWave", options: ["सब-6 GHz और mmWave", "केवल 2.4 GHz", "केवल 5 GHz", "UHF बैंड"] },
    { q: "गगनयान मिशन के लिए किस रॉकेट का उपयोग किया जाएगा?", a: "LVM3 (GSLV Mk III)", options: ["LVM3 (GSLV Mk III)", "PSLV-XL", "GSLV Mk II", "SSLV"] },
    { q: "कंप्यूटर की भाषा में 'बग' (Bug) का क्या अर्थ है?", a: "सॉफ्टवेयर में त्रुटि (Error)", options: ["सॉफ्टवेयर में त्रुटि (Error)", "हार्डवेयर की खराबी", "कंप्यूटर वायरस", "हैकिंग"] },
    { q: "भारत का पहला उपग्रह कौन सा था?", a: "आर्यभट्ट", options: ["आर्यभट्ट", "रोहिणी", "भास्कर", "इनसैट-1A"] },
    { q: "CPU का वह भाग जो गणितीय और तार्किक कार्य करता है, क्या कहलाता है?", a: "ALU (Arithmetic Logic Unit)", options: ["ALU (Arithmetic Logic Unit)", "CU (Control Unit)", "रजिस्टर", "कैश मेमोरी"] },
    { q: "निम्नलिखित में से कौन सा एक सर्च इंजन नहीं है?", a: "Safari", options: ["Safari", "Google", "Bing", "Yahoo"] },
    { q: "भारत में निर्मित पहला कंप्यूटर कौन सा है?", a: "सिद्धार्थ", options: ["सिद्धार्थ", "परम", "एकलव्य", "त्रिशूल"] },
    { q: "NASA का मुख्यालय कहाँ स्थित है?", a: "वाशिंगटन डी.सी.", options: ["वाशिंगटन डी.सी.", "फ्लोरिडा", "कैलिफोर्निया", "टेक्सास"] },
    { q: "AI (Artificial Intelligence) के जनक कौन हैं?", a: "जॉन मैकार्थी", options: ["जॉन मैकार्थी", "एलन ट्यूरिंग", "मर्विन मिन्स्की", "जेफ्री हिंटन"] },
    { q: "भारत का 'UPI' (Unified Payments Interface) किसके द्वारा विकसित किया गया है?", a: "NPCI", options: ["NPCI", "RBI", "SBI", "NIC"] },
    { q: "GPS का पूर्ण रूप क्या है?", a: "Global Positioning System", options: ["Global Positioning System", "Geographic Positioning System", "Global Pointing System", "Geographic Pointing System"] },
    { q: "कंप्यूटर में डेटा की सबसे छोटी इकाई क्या है?", a: "बिट (Bit)", options: ["बिट (Bit)", "बाइट (Byte)", "निबल (Nibble)", "पिक्सेल (Pixel)"] },
    { q: "इसरो द्वारा लॉन्च किया गया मार्स ऑर्बिटर मिशन (MOM) का अनौपचारिक नाम क्या है?", a: "मंगलयान", options: ["मंगलयान", "गगनयान", "चंद्रयान", "सूर्ययान"] },
    { q: "ऑप्टिकल फाइबर किस सिद्धांत पर काम करता है?", a: "पूर्ण आंतरिक परावर्तन (Total Internal Reflection)", options: ["पूर्ण आंतरिक परावर्तन (Total Internal Reflection)", "अपवर्तन", "विवर्तन", "प्रकीर्णन"] },
    { q: "USB का पूर्ण रूप क्या है?", a: "Universal Serial Bus", options: ["Universal Serial Bus", "Uniform Serial Bus", "Universal Standard Bus", "Uniform Standard Bus"] },
    { q: "निम्नलिखित में से कौन सी एक प्रोग्रामिंग भाषा नहीं है?", a: "HTML", options: ["HTML", "Python", "Java", "C++"] },
    { q: "भारत के किस शहर को 'सिलिकॉन वैली ऑफ इंडिया' कहा जाता है?", a: "बेंगलुरु", options: ["बेंगलुरु", "हैदराबाद", "पुणे", "गुरुग्राम"] },
    { q: "DRDO का मुख्यालय कहाँ स्थित है?", a: "नई दिल्ली", options: ["नई दिल्ली", "बेंगलुरु", "हैदराबाद", "देहरादून"] },
    { q: "पहला एप्पल (Apple) कंप्यूटर किसने बनाया था?", a: "स्टीव वोज्नियाक", options: ["स्टीव वोज्नियाक", "स्टीव जॉब्स", "बिल गेट्स", "पॉल एलन"] },
    { q: "विश्व का पहला कृत्रिम उपग्रह (Artificial Satellite) कौन सा था?", a: "स्पुतनिक 1", options: ["स्पुतनिक 1", "एक्सप्लोरर 1", "वैनगार्ड 1", "आर्यभट्ट"] },
    { q: "कंप्यूटर मॉनिटर के डिस्प्ले का आकार कैसे मापा जाता है?", a: "विकर्ण (Diagonally)", options: ["विकर्ण (Diagonally)", "क्षैतिज (Horizontally)", "लंबवत (Vertically)", "परिधि (Perimeter)"] },
    { q: "किस भारतीय मिसाइल को 'फायर एंड फॉरगेट' (Fire and Forget) मिसाइल कहा जाता है?", a: "नाग", options: ["नाग", "अग्नि", "ब्रह्मोस", "त्रिशूल"] },
    { q: "LAN का पूर्ण रूप क्या है?", a: "Local Area Network", options: ["Local Area Network", "Large Area Network", "Logical Area Network", "Local Access Network"] },
    { q: "WWW (World Wide Web) का आविष्कार किसने किया था?", a: "टिम बर्नर्स-ली", options: ["टिम बर्नर्स-ली", "बिल गेट्स", "विंट सर्फ", "स्टीव जॉब्स"] },
    { q: "भारत का स्वदेशी नेविगेशन सिस्टम कौन सा है?", a: "NavIC", options: ["NavIC", "GPS", "GLONASS", "Galileo"] },
    { q: "1 बाइट (Byte) में कितने बिट्स (Bits) होते हैं?", a: "8", options: ["8", "4", "16", "32"] },
    { q: "सॉफ्टवेयर कोड में त्रुटियों (Errors) को खोजने की प्रक्रिया क्या कहलाती है?", a: "डीबगिंग (Debugging)", options: ["डीबगिंग (Debugging)", "कंपाइलिंग", "टेस्टिंग", "रनिंग"] },
    { q: "ई-मेल (E-mail) का आविष्कार किसने किया था?", a: "रे टॉमलिंसन", options: ["रे टॉमलिंसन", "मार्क जुकरबर्ग", "सबीर भाटिया", "चार्ल्स बैबेज"] },
    { q: "ISRO की स्थापना किस वर्ष हुई थी?", a: "1969", options: ["1969", "1958", "1972", "1980"] },
    { q: "PDF का पूर्ण रूप क्या है?", a: "Portable Document Format", options: ["Portable Document Format", "Printed Document Format", "Public Document Format", "Personal Document Format"] },
    { q: "हार्ड डिस्क किस प्रकार की मेमोरी का उदाहरण है?", a: "सेकेंडरी मेमोरी", options: ["सेकेंडरी मेमोरी", "प्राइमरी मेमोरी", "कैश मेमोरी", "वर्चुअल मेमोरी"] },
    { q: "डार्क वेब को एक्सेस करने के लिए आमतौर पर किस ब्राउज़र का उपयोग किया जाता है?", a: "Tor", options: ["Tor", "Chrome", "Firefox", "Safari"] },
    { q: "किस ग्रह के पास सबसे अधिक प्राकृतिक उपग्रह (Moons) हैं?", a: "शनि", options: ["शनि", "बृहस्पति", "मंगल", "यूरेनस"] },
    { q: "भारत में निर्मित पहली न्यूक्लियर पनडुब्बी (Nuclear Submarine) कौन सी है?", a: "INS अरिहंत", options: ["INS अरिहंत", "INS चक्र", "INS कलवरी", "INS विक्रमादित्य"] },
    { q: "कंप्यूटर का कौन सा भाग 'मस्तिष्क' (Brain) कहलाता है?", a: "CPU", options: ["CPU", "RAM", "मदरबोर्ड", "हार्ड डिस्क"] },
    { q: "किस कंपनी ने 'चैटजीपीटी' (ChatGPT) विकसित किया है?", a: "OpenAI", options: ["OpenAI", "Google", "Microsoft", "Meta"] },
    { q: "LTE और VoLTE शब्द किस तकनीक से संबंधित हैं?", a: "मोबाइल संचार", options: ["मोबाइल संचार", "उपग्रह संचार", "ब्लूटूथ", "वाई-फाई"] },
    { q: "विश्व का पहला माइक्रोप्रोसेसर कौन सा था?", a: "Intel 4004", options: ["Intel 4004", "Intel 8080", "Intel Pentium", "Motorola 6800"] },
    { q: "नासा के किस टेलीस्कोप ने हबल टेलीस्कोप की जगह ली है?", a: "जेम्स वेब स्पेस टेलीस्कोप", options: ["जेम्स वेब स्पेस टेलीस्कोप", "केप्लर टेलीस्कोप", "स्पिट्जर टेलीस्कोप", "चंद्रा एक्स-रे वेधशाला"] },
    { q: "सोनार (SONAR) तकनीक का उपयोग मुख्य रूप से किसलिए किया जाता है?", a: "पानी के नीचे की वस्तुओं का पता लगाने के लिए", options: ["पानी के नीचे की वस्तुओं का पता लगाने के लिए", "हवा में विमान का पता लगाने के लिए", "रेडियो तरंगों को मापने के लिए", "अंतरिक्ष अनुसंधान में"] },
    { q: "कंप्यूटर स्क्रीन पर दिखने वाले 'कर्सर' को नियंत्रित करने के लिए किस इनपुट डिवाइस का उपयोग किया जाता है?", a: "माउस", options: ["माउस", "कीबोर्ड", "स्कैनर", "प्रिंटर"] },
    { q: "CERN (यूरोपीय परमाणु अनुसंधान संगठन) का मुख्यालय कहाँ है?", a: "जिनेवा (स्विट्जरलैंड)", options: ["जिनेवा (स्विट्जरलैंड)", "पेरिस (फ्रांस)", "लंदन (यूके)", "बर्लिन (जर्मनी)"] },
    { q: "विंडोज ऑपरेटिंग सिस्टम का विकास किस कंपनी ने किया है?", a: "Microsoft", options: ["Microsoft", "Apple", "Google", "IBM"] },
    { q: "क्रिप्टोकरेंसी 'बिटकॉइन' (Bitcoin) का आविष्कार किसने किया?", a: "सातोशी नाकामोतो", options: ["सातोशी नाकामोतो", "विटालिक ब्यूटिरिन", "एलोन मस्क", "मार्क एंड्रीसेन"] },
    { q: "निम्नलिखित में से कौन सा एक मैलवेयर (Malware) का प्रकार नहीं है?", a: "कुकीज़", options: ["कुकीज़", "वायरस", "रैनसमवेयर", "ट्रोजन"] },
    { q: "अंतरिक्ष में जाने वाले पहले इंसान कौन थे?", a: "यूरी गागरिन", options: ["यूरी गागरिन", "नील आर्मस्ट्रांग", "बज़ एल्ड्रिन", "राकेश शर्मा"] },
    { q: "HTTP में 'S' का क्या अर्थ है?", a: "Secure", options: ["Secure", "System", "Server", "Standard"] },
    { q: "रडार (RADAR) का पूर्ण रूप क्या है?", a: "Radio Detection and Ranging", options: ["Radio Detection and Ranging", "Radio Direction and Resolution", "Rapid Detection and Ranging", "Radio Device and Range"] },
    { q: "IPv4 एड्रेस कितने बिट (Bits) का होता है?", a: "32", options: ["32", "64", "128", "16"] },
    { q: "भारत का पहला परमाणु परीक्षण किस कोड नाम के तहत किया गया था?", a: "स्माइलिंग बुद्धा", options: ["स्माइलिंग बुद्धा", "ऑपरेशन शक्ति", "ऑपरेशन विजय", "ऑपरेशन पराक्रम"] },
    { q: "किस सोशल मीडिया प्लेटफॉर्म का नाम बदलकर 'X' कर दिया गया है?", a: "Twitter", options: ["Twitter", "Facebook", "Instagram", "Snapchat"] },
    { q: "कंप्यूटर कीबोर्ड में 'F1' से 'F12' तक की कुंजियों को क्या कहा जाता है?", a: "फंक्शन कुंजियाँ (Function Keys)", options: ["फंक्शन कुंजियाँ (Function Keys)", "न्यूमेरिक कुंजियाँ", "अल्फाबेटिक कुंजियाँ", "कंट्रोल कुंजियाँ"] },
    { q: "आकाशगंगा (Galaxy) जिसमें हमारा सौरमंडल है, उसका क्या नाम है?", a: "मिल्की वे (Milky Way)", options: ["मिल्की वे (Milky Way)", "एंड्रोमेडा", "सिट्टी", "सोम्ब्रेरो"] },
    { q: "LCD का पूर्ण रूप क्या है?", a: "Liquid Crystal Display", options: ["Liquid Crystal Display", "Light Crystal Display", "Liquid Color Display", "Light Color Display"] },
    { q: "सुपर कंप्यूटर की गति किसमें मापी जाती है?", a: "FLOPS", options: ["FLOPS", "MIPS", "GHz", "Bytes"] },
    { q: "भारत में इंटरनेट सेवा प्रदाता (ISP) कौन था जिसने सबसे पहले इंटरनेट की शुरुआत की?", a: "VSNL", options: ["VSNL", "BSNL", "MTNL", "Jio"] },
    { q: "सॉफ्टवेयर या ऐप का परीक्षण (testing) करने वाले उपयोगकर्ताओं के लिए जारी संस्करण को क्या कहते हैं?", a: "बीटा (Beta) संस्करण", options: ["बीटा (Beta) संस्करण", "अल्फा संस्करण", "फाइनल संस्करण", "डेमो संस्करण"] },
    { q: "इसरो के किस रॉकेट को 'बाहुबली' कहा जाता है?", a: "GSLV Mk III (LVM3)", options: ["GSLV Mk III (LVM3)", "PSLV-C25", "PSLV-C11", "ASLV"] },
    { q: "वेबसाइट का मुख्य पृष्ठ (Main Page) क्या कहलाता है?", a: "होम पेज", options: ["होम पेज", "इंडेक्स पेज", "सर्च पेज", "बुकमार्क"] },
    { q: "DRDO की स्थापना किस वर्ष हुई थी?", a: "1958", options: ["1958", "1969", "1947", "1972"] },
    { q: "कंप्यूटर को शटडाउन करने के लिए कौन सी शॉर्टकट कुंजी का उपयोग किया जाता है?", a: "Alt + F4", options: ["Alt + F4", "Ctrl + Alt + Delete", "Windows + D", "Ctrl + Shift + Esc"] },
    { q: "हबल स्पेस टेलीस्कोप को किस अंतरिक्ष एजेंसी ने लॉन्च किया था?", a: "NASA", options: ["NASA", "ESA", "ISRO", "Roscosmos"] },
    { q: "भारत का 'परम सिद्धि-एआई' क्या है?", a: "सुपरकंप्यूटर", options: ["सुपरकंप्यूटर", "मिसाइल", "उपग्रह", "रोबोट"] },
    { q: "HTML का पूर्ण रूप क्या है?", a: "Hyper Text Markup Language", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Text Machine Language", "High Text Machine Language"] },
    { q: "कौन सा ग्रह सूर्य के सबसे नजदीक है?", a: "बुध", options: ["बुध", "शुक्र", "पृथ्वी", "मंगल"] },
    { q: "किस कंपनी ने 'एंड्रॉइड' (Android) ऑपरेटिंग सिस्टम विकसित किया है?", a: "Google", options: ["Google", "Apple", "Microsoft", "Samsung"] },
    { q: "भारत में 5G सेवा का आधिकारिक शुभारंभ कब हुआ?", a: "1 अक्टूबर 2022", options: ["1 अक्टूबर 2022", "15 अगस्त 2022", "26 जनवरी 2023", "1 जनवरी 2023"] },
    { q: "ROM किस प्रकार की मेमोरी है?", a: "Non-Volatile", options: ["Non-Volatile", "Volatile", "Cache", "Virtual"] },
    { q: "दुनिया का सबसे तेज सुपरकंप्यूटर (2023 तक) कौन सा है?", a: "फ्रंटियर (Frontier)", options: ["फ्रंटियर (Frontier)", "फुगाकु (Fugaku)", "परम सिद्धि", "लूमी (LUMI)"] },
    { q: "MAC एड्रेस कितने बिट का होता है?", a: "48", options: ["48", "32", "64", "128"] },
    { q: "ब्लैक होल (Black Hole) का सिद्धांत किसने प्रतिपादित किया था?", a: "जॉन व्हीलर", options: ["जॉन व्हीलर", "अल्बर्ट आइंस्टीन", "स्टीफन हॉकिंग", "सुब्रह्मण्यन चंद्रशेखर"] },
    { q: "कंप्यूटर में किसी फ़ाइल को स्थायी रूप से हटाने (Permanent Delete) के लिए शॉर्टकट कुंजी क्या है?", a: "Shift + Delete", options: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"] },
    { q: "भारत की पहली एंटी-रेडिएशन मिसाइल का क्या नाम है?", a: "रुद्रम-1", options: ["रुद्रम-1", "अस्त्र", "आकाश", "पृथ्वी"] },
    { q: "क्लाउड कंप्यूटिंग में 'SaaS' का पूर्ण रूप क्या है?", a: "Software as a Service", options: ["Software as a Service", "System as a Service", "Storage as a Service", "Server as a Service"] },
    { q: "किस वैज्ञानिक ने 'टेलीफोन' का आविष्कार किया?", a: "अलेक्जेंडर ग्राहम बेल", options: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लिल्मो मार्कोनी"] },
    { q: "कंप्यूटर मॉनिटर पर पिक्सेल (Pixel) की संख्या क्या निर्धारित करती है?", a: "रिज़ॉल्यूशन (Resolution)", options: ["रिज़ॉल्यूशन (Resolution)", "कंट्रास्ट", "रिफ्रेश रेट", "आकार"] },
    { q: "डेटा को सुरक्षित रूप से ट्रांसमिट करने के लिए किस तकनीक का उपयोग किया जाता है?", a: "क्रिप्टोग्राफी (Cryptography)", options: ["क्रिप्टोग्राफी (Cryptography)", "स्टेग्नोग्राफ़ी", "हैकिंग", "फिशिंग"] },
    { q: "अंतरिक्ष में जाने वाली पहली भारतीय मूल की महिला कौन थीं?", a: "कल्पना चावला", options: ["कल्पना चावला", "सुनीता विलियम्स", "सिरीशा बांदला", "शालिजा धामी"] },
    { q: "कंप्यूटर वायरस का मुख्य उद्देश्य क्या होता है?", a: "डेटा को नुकसान पहुँचाना", options: ["डेटा को नुकसान पहुँचाना", "कंप्यूटर की स्पीड बढ़ाना", "हार्डवेयर की मरम्मत करना", "सॉफ्टवेयर अपडेट करना"] },
    { q: "भारत का पहला रक्षा उपग्रह (Defence Satellite) कौन सा है?", a: "GSAT-7 (रुक्मिणी)", options: ["GSAT-7 (रुक्मिणी)", "कार्टोसैट", "रिसैट-1", "माइक्रोसैट-आर"] },
    { q: "इंटरनेट पर किसी वेबसाइट को खोजने के लिए किस सिस्टम का उपयोग किया जाता है, जो IP को डोमेन नाम में बदलता है?", a: "DNS (Domain Name System)", options: ["DNS (Domain Name System)", "DHCP", "FTP", "HTTP"] },
    { q: "ई-कॉमर्स कंपनी 'Amazon' के संस्थापक कौन हैं?", a: "जेफ बेजोस", options: ["जेफ बेजोस", "एलोन मस्क", "मार्क जुकरबर्ग", "लैरी पेज"] },
    { q: "भारतीय रेलवे द्वारा विकसित 'कवच' (Kavach) क्या है?", a: "ऑटोमैटिक ट्रेन प्रोटेक्शन सिस्टम", options: ["ऑटोमैटिक ट्रेन प्रोटेक्शन सिस्टम", "नई हाई-स्पीड ट्रेन", "टिकट बुकिंग ऐप", "वाई-फाई सेवा"] },
    { q: "निम्नलिखित में से कौन सा डिवाइस इनपुट और आउटपुट दोनों का कार्य कर सकता है?", a: "टच स्क्रीन", options: ["टच स्क्रीन", "कीबोर्ड", "प्रिंटर", "माउस"] },
    { q: "सूर्य के चारों ओर ग्रहों की गति का नियम किसने दिया?", a: "जोहान्स केप्लर", options: ["जोहान्स केप्लर", "निकोलस कोपरनिकस", "गैलीलियो गैलीली", "आइजैक न्यूटन"] },
    { q: "वाइ-फाई (Wi-Fi) का इस्तेमाल करने के लिए किस हार्डवेयर कंपोनेंट की आवश्यकता होती है?", a: "राउटर", options: ["राउटर", "स्विच", "हब", "मॉडेम"] },
    { q: "सॉफ्टवेयर जो बिना किसी शुल्क के उपयोग के लिए उपलब्ध होता है, उसे क्या कहते हैं?", a: "फ्रीवेयर (Freeware)", options: ["फ्रीवेयर (Freeware)", "शेयरवेयर", "ओपन सोर्स", "मैलवेयर"] },
    { q: "चंद्रमा पर कदम रखने वाले पहले व्यक्ति नील आर्मस्ट्रांग किस अंतरिक्ष यान से गए थे?", a: "अपोलो 11", options: ["अपोलो 11", "अपोलो 13", "वोस्तोक 1", "स्पुतनिक"] },
    { q: "कंप्यूटर में किसी टेक्स्ट को कॉपी करने की शॉर्टकट कुंजी क्या है?", a: "Ctrl + C", options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + P"] },
    { q: "जीवाश्मों की आयु निर्धारित करने के लिए किस तकनीक का उपयोग किया जाता है?", a: "कार्बन डेटिंग (C-14)", options: ["कार्बन डेटिंग (C-14)", "यूरेनियम डेटिंग", "पोटेशियम आर्गन डेटिंग", "फ्लोरीन डेटिंग"] }
];

// Helper to shuffle options array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const targetFile = path.join('data', 'technology-gk-full.js');
let fileContent = fs.readFileSync(targetFile, 'utf8');

// Find the end of the questions array
const insertPos = fileContent.lastIndexOf(']');
if (insertPos === -1) {
    console.error("Could not find the end of the questions array.");
    process.exit(1);
}

// Find existing count to continue IDs
const idMatches = fileContent.match(/tech_\d+/g) || [];
let nextId = idMatches.length;

let newText = '';
if (!fileContent.substring(insertPos - 5, insertPos).includes(',')) {
    newText += ',\n';
}

techQuestions.forEach((q) => {
  // Ensure options has exactly 4 elements
  const options = [...q.options];
  while(options.length < 4) {
      options.push('अन्य ' + Math.random().toString(36).substr(2, 5));
  }
  const shuffledOptions = shuffleArray(options.slice(0, 4));
  const answerIndex = shuffledOptions.indexOf(q.a);

  newText += `    { id: 'tech_${nextId++}', q: "${q.q.replace(/"/g, '\\"')}", a: "${q.a.replace(/"/g, '\\"')}", type: 'mcq', options: ${JSON.stringify(shuffledOptions)}, answer: ${answerIndex} },\n`;
});

const updatedContent = fileContent.slice(0, insertPos) + newText + fileContent.slice(insertPos);
fs.writeFileSync(targetFile, updatedContent, 'utf8');

console.log(`Successfully appended ${techQuestions.length} questions to Technology GK.`);
