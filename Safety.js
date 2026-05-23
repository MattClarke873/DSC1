/* ============================================================
   SAFETY QUESTION BANK  (26 questions)
   Fields:
     id        : unique question number
     q         : question text
     scotland  : compulsory in Scotland assessments
     compulsory: compulsory in ALL assessments
     england   : compulsory in England assessments
     std       : DMQ standard (what examiner needs to hear)
     bullets   : model answer bullet points
       t    : bullet text
       type : 'main' (default) | 'group' (section heading)
   ============================================================ */
const SQ = [
{
  id:1,
  q:"A friend asks to examine your new rifle. Demonstrate safe weapon handling.",
  std:"Demonstrate all four actions correctly",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Demonstrate muzzle awareness at all times"},
    {t:"Open the bolt"},
    {t:"Physically check that the chamber and magazine/housing are clear"},
    {t:"Show the weapon is clear and obtain confirmation before handing it over with bolt open"}
  ]
},
{
  id:2,
  q:"How should you carry your rifle while stalking alone in woodland?",
  std:"Demonstrate all four actions correctly",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Muzzle awareness demonstrated at all times"},
    {t:"Rifle is fully loaded and charged (safety catch covers this)"},
    {t:"Safety catch applied and periodically checked"},
    {t:"Slings and swivels in good working order"}
  ]
},
{
  id:3,
  q:"If there are three or more people stalking together, what extra precautions are required? (a) When stalking together, (b) When stalking separately.",
  std:"Both answers to (a) plus three answers to (b)",
  compulsory:false, scotland:false,
  bullets:[
    {t:"(a) When stalking together:", type:'group'},
    {t:"One leader must be nominated from the party"},
    {t:"Person in front must carry the ONLY loaded rifle"},
    {t:"(b) When stalking separately:", type:'group'},
    {t:"Allocate clear areas of operation/boundaries and no straying"},
    {t:"All party to know where all others are whenever party is split up"},
    {t:"All aware of how communications are to be used (mobile phones/estate radios)"},
    {t:"All aware of the designated rendezvous point and time window before emergency procedures"},
    {t:"All aware of emergency signalling: whistle, rifle shots into safe area, high-vis vest"},
    {t:"All must know predetermined plan if weather turns bad"},
    {t:"All must know time of last shot"}
  ]
},
{
  id:4,
  q:"You have to crawl to get within range of your quarry. What three safety precautions should you implement?",
  std:"Correctly give three answers",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Ensure that at no time anyone can get into the line of fire whilst crawling"},
    {t:"Guard against accidental discharge by approaching with an empty chamber or protecting the safety catch and trigger"},
    {t:"Protect against an obstructed barrel by using extreme care or using tape to shield the muzzle"}
  ]
},
{
  id:5,
  q:"Knives if used incorrectly can easily cause serious accidents. How can the risks be minimised? Give answers for (a) whilst being carried and (b) whilst in use.",
  std:"Two answers to (a) and two answers to (b)",
  compulsory:false, scotland:false,
  bullets:[
    {t:"(a) Whilst being carried:", type:'group'},
    {t:"Ensure that there is a lock blade on any folding knife"},
    {t:"Never carry opened knife in a pocket"},
    {t:"Ensure that any fixed blade knife is secured in a sheath"},
    {t:"Use a sheath with a protective insert or made from impenetrable material"},
    {t:"(b) Whilst in use:", type:'group'},
    {t:"Ensure animal is dead before opening or unsheathing a knife"},
    {t:"Use a sharp and clean knife"},
    {t:"Never use undue force or haste"},
    {t:"Cut away from yourself"},
    {t:"Use protective glove"}
  ]
},
{
  id:6,
  q:"What two safety precautions must be observed before climbing into a high seat?",
  std:"Correctly give both answers",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Check seat for condition — in proper repair, no sabotage or tampering, and secure"},
    {t:"Unload rifle to climb up or down"}
  ]
},
{
  id:7,
  q:"While crawling towards a deer you plug your barrel with mud or frozen snow. What should you do?",
  std:"Correctly give all four answers",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Unload rifle completely"},
    {t:"Clear obstruction and clean barrel with correct equipment for the task"},
    {t:"Reload"},
    {t:"If cleaning kit is not carried, then abandon the stalk"}
  ]
},
{
  id:8,
  q:"You take over the stalking rights on a new piece of ground. Before going out stalking, what must you do?",
  std:"Both starred answers plus one other",
  compulsory:false, scotland:false,
  bullets:[
    {t:"★ Study maps and learn exact boundaries"},
    {t:"★ Find out where high-risk areas are e.g. footpaths, roads, and houses"},
    {t:"Find out who else might be expected on the ground e.g. farm workers or contractors"},
    {t:"Where pheasants/farm stock are kept and regularly fed"},
    {t:"Where ground allows safe shooting and best lines of approach to it"},
    {t:"Where ground appears unsafe i.e. high seats may be required"}
  ]
},
{
  id:9,
  q:"While woodland stalking on your own you encounter a physical obstacle such as a fence or ditch. How do you cross it safely?",
  std:"All starred actions — negotiating the obstacle is not mandatory",
  compulsory:true, scotland:false, england:true,
  bullets:[
    {t:"★ Unload rifle completely and close bolt having ensured chamber and magazine/housing are clear"},
    {t:"★ Negotiate the obstacle ensuring rifle is carried or laid down in a safe manner"},
    {t:"Retrieve rifle"},
    {t:"★ Reload having checked that the barrel is clear"},
    {t:"★ Apply safety catch"}
  ]
},
{
  id:10,
  q:"You are stalking in forestry with a friend and have to cross a fence — there is no gate. How do you cross it safely?",
  std:"All starred actions — climbing the fence not mandatory",
  compulsory:true, scotland:false, england:true,
  bullets:[
    {t:"★ Unload rifle completely ensuring chamber and magazine/housing are clear"},
    {t:"★ Hand rifle to friend with bolt open"},
    {t:"Climb fence"},
    {t:"★ Take rifle back and reload and apply safety catch"},
    {t:"★ Demonstrate muzzle awareness at all times"}
  ]
},
{
  id:11,
  q:"Imagine you are stalking. You will be shown a minimum of 4 deer (simulated by cut-out targets) — tell the invigilator whether it would be safe to shoot each, and if not, why not.",
  std:"All four scenarios to be correctly answered",
  compulsory:true, scotland:true,
  bullets:[
    {t:"Assess each target for a safe backstop — deer on skyline: NO SHOOT"},
    {t:"Deer in front of unsafe backstops (buildings, roads, ricochet hazards): NO SHOOT"},
    {t:"Deer in front of other deer: NO SHOOT (risk of through-and-through)"},
    {t:"Only half visible or obstructed: NO SHOOT"},
    {t:"One target should have a safe backstop and be in range: SHOOT — heart/lung only"},
    {t:"Give clear reasons for each decision"},
    {t:"Only heart and lung shots are acceptable"}
  ]
},
{
  id:12,
  q:"You are about to fire your rifle at a deer. What checks should you make before squeezing the trigger to ensure a safe and humane shot?",
  std:"Correctly answer all four points",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Steady shooting position, preferable supported"},
    {t:"No obstructions in the line of fire"},
    {t:"Animal stood in a position to allow a humane shot"},
    {t:"There is a safe backstop immediately behind the animal"}
  ]
},
{
  id:13,
  q:"You shoot and the deer runs off before collapsing in long grass. How do you approach it?",
  std:"Correctly answer all four points",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Approach with rifle ready to fire — uncased, loaded with safety catch applied"},
    {t:"Keep a safe backstop in case you have to shoot again"},
    {t:"Approach deer whilst always attempting to ascertain the condition of the deer"},
    {t:"Touch eyeball to ensure no reaction (but not with rifle or finger)"}
  ]
},
{
  id:14,
  q:"You fire at a deer, which falls and rolls down a hill. When you approach, it is struggling violently but seems unable to get up. What should you do?",
  std:"Correctly answer all four points",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Keep anyone with you well back"},
    {t:"Try to stay out of sight and downwind"},
    {t:"Move round to ensure a safe angle and safe backstop"},
    {t:"Shoot deer again once a safe despatching shot presents itself"}
  ]
},
{
  id:15,
  q:"From the moment a deer is shot it must be treated as food and all contamination avoided. What are the five main sources of contamination?",
  std:"Any three of the five",
  compulsory:false, scotland:false,
  bullets:[
    {t:"The bullet"},
    {t:"The gralloch"},
    {t:"From the environment"},
    {t:"From equipment"},
    {t:"From transport/storage"}
  ]
},
{
  id:16,
  q:"Security of firearms and safety in the home is the responsibility of the stalker. Give three major risks.",
  std:"Candidate must identify the three main areas of risk",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Accidental discharge"},
    {t:"Theft"},
    {t:"Unauthorised use"}
  ]
},
{
  id:17,
  q:"You are driving home after stalking and stop at a cafe for a meal. If it is absolutely necessary to leave your rifle in an unattended vehicle, what safety precautions must you take?",
  std:"Correctly answer all four points",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Remove bolt and FAC from car and carry with you"},
    {t:"Take ammunition with you if the quantity involved makes this feasible and appropriate"},
    {t:"Ideally lock the rifle in the boot, preferably attached to car, but always out of sight"},
    {t:"Try to park the car in a well-lit area where you can see it"}
  ]
},
{
  id:18,
  q:"What measures can you take to reduce safety risks when stalking in popular country areas well used by the general public?",
  std:"Correctly answer all three points",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Take extra precautions at weekends/bank holidays or periods of mass public presence"},
    {t:"Make maximum use of high seats"},
    {t:"Extreme vigilance before taking a shot"}
  ]
},
{
  id:19,
  q:"When loading a stag carcass into the back of a vehicle, what safety precautions should be taken?",
  std:"Correctly answer three of the four points",
  compulsory:false, scotland:false,
  bullets:[
    {t:"Restrain deer's head and hooves"},
    {t:"Lift awkward load correctly with help of another"},
    {t:"Ensure carcass firmly secured and will not shift or become contaminated in any way"},
    {t:"Do not overload vehicle in any way"}
  ]
},
{
  id:20,
  q:"How should you carry your rifle while hill stalking BEFORE you approach deer to take a shot?",
  std:"Demonstrate all four actions correctly",
  compulsory:true, scotland:true,
  bullets:[
    {t:"Slings, swivels and attachments on slip are checked to ensure they are in good working order"},
    {t:"Rifle is fully loaded with bolt carefully closed on an empty chamber"},
    {t:"Safety catch applied and checked before placing rifle in slip"},
    {t:"Slip is fastened securely and carried as appropriate"}
  ]
},
{
  id:21,
  q:"How should you carry your rifle while hill stalking ONCE you closely approach deer to take a shot?",
  std:"Demonstrate all four actions correctly",
  compulsory:true, scotland:true,
  bullets:[
    {t:"At an appropriate time during the final approach the rifle is removed from the slip"},
    {t:"Muzzle awareness demonstrated at all times once weapon is removed from slip"},
    {t:"Rifle is pointed in a safe direction whilst a round is chambered"},
    {t:"Safety catch is applied, periodically checked, and only removed when in final position and about to take the shot"}
  ]
},
{
  id:22,
  q:"When the deer is confirmed dead, what action would you take with your rifle and ammunition?",
  std:"Demonstrate all three actions correctly",
  compulsory:false, scotland:true,
  bullets:[
    {t:"Unload rifle completely ensuring chamber and magazine/housing are clear"},
    {t:"Double check the empty condition of rifle before placing back into slip"},
    {t:"Place rifle away from work area"}
  ]
},
{
  id:23,
  q:"You are going out hill stalking alone. What safety precautions should you take regarding (a) planning and preparation, and (b) equipment?",
  std:"Five points from part (a) and seven points from part (b)",
  compulsory:false, scotland:true,
  bullets:[
    {t:"(a) Planning & preparation:", type:'group'},
    {t:"Assess weather conditions and time available"},
    {t:"Choose an appropriate area"},
    {t:"Take radio or mobile telephone communications"},
    {t:"Leave details of route or area to be stalked with someone"},
    {t:"Give your expected time of return"},
    {t:"Detail when to worry and seek help if you do not return"},
    {t:"Be prepared to come home immediately if the weather turns nasty"},
    {t:"Know your own limitations and plan accordingly"},
    {t:"Always stick to your plan"},
    {t:"(b) Equipment:", type:'group'},
    {t:"Warm clothes"},
    {t:"Waterproof clothes"},
    {t:"Sustaining food/hot drink"},
    {t:"Compass"},
    {t:"Map"},
    {t:"Torch"},
    {t:"Flares"},
    {t:"Survival blanket"},
    {t:"Mobile phone"},
    {t:"Small first aid kit"},
    {t:"Whistle"}
  ]
},
{
  id:24,
  q:"If your stalking companion becomes unable to walk further through injury or exhaustion in bad weather on the hill (no mobile phone signal), what should you do?",
  std:"Correctly give all answers",
  compulsory:false, scotland:true,
  bullets:[
    {t:"Give first aid"},
    {t:"If possible get him to some sort of shelter"},
    {t:"Give him plenty of clothes, warm drink or food"},
    {t:"If he cannot go on and is NOT delirious, make him comfortable and reassure him"},
    {t:"Tell him to stay put and go to get help"},
    {t:"If he is delirious, stay with him until help arrives unless he may die before then — in which case risk leaving him to seek assistance"},
    {t:"If you leave, note and mark his location and record the OS grid reference"}
  ]
},
{
  id:25,
  q:"While hill stalking on your own you encounter a physical obstacle such as a fence or ditch. How do you cross it safely?",
  std:"All starred actions — negotiating the obstacle is not mandatory",
  compulsory:true, scotland:true,
  bullets:[
    {t:"★ Unload rifle completely and close bolt having ensured chamber and magazine/housing are clear"},
    {t:"★ Negotiate the obstacle ensuring rifle is carried or laid down in a safe manner"},
    {t:"Retrieve rifle"},
    {t:"★ Reload having checked that the barrel is clear"},
    {t:"★ Apply safety catch"}
  ]
},
{
  id:26,
  q:"You are stalking on the hill with a friend and have to cross a fence — there is no gate. How do you cross it safely?",
  std:"All starred actions — climbing the fence not mandatory",
  compulsory:true, scotland:true,
  bullets:[
    {t:"★ Unload rifle completely ensuring chamber and magazine/housing are clear"},
    {t:"★ Hand rifle to friend with bolt open"},
    {t:"Climb fence"},
    {t:"★ Take rifle back and reload and apply safety catch"},
    {t:"★ Demonstrate muzzle awareness at all times"}
  ]
}
];

