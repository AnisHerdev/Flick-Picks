const movies ={
    action :[
        { title:"Leo",description:"Parthiban is a mild-mannered cafe owner in Kashmir, who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them."},
        { title: "Die Hard", description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles." },
        { title: "The Dark Knight", description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
        { title: "Mad Max: Fury Road", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max." },
        { title: "Mission: Impossible - Fallout", description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong." },
        { title: "John Wick", description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him." },
        { title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers." },
        { title: "The Terminator", description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation." },
        { title: "Gladiator", description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery." },
        { title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." },
        { title: "The Avengers", description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity." },
        { title: "Lethal Weapon", description: "Two newly paired cops who are complete opposites must put aside their differences in order to catch a gang of drug smugglers." },
        { title: "Speed", description: "A young cop must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph." },
        { title: "The Rock", description: "A mild-mannered chemist and an ex-con must lead the counterstrike when a rogue group of military men, led by a renegade general, threaten a nerve gas attack from Alcatraz against San Francisco." },
        { title: "Rambo: First Blood", description: "A veteran Green Beret is forced by a cruel Sheriff and his deputies to flee into the mountains and wage an escalating one-man war against his pursuers." },
        { title: "Die Hard with a Vengeance", description: "John McClane and a Harlem store owner are targeted by German terrorist Simon Gruber in New York City, where he plans to rob the Federal Reserve Building." },
        { title: "Predator", description: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior." },
        { title: "Terminator 2: Judgment Day", description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg." },
        { title: "The Bourne Identity", description: "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory." },
        { title: "The Dark Knight Rises", description: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane." },
        { title: "Casino Royale", description: "After earning 00 status and a license to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro." },
        { title: "Indiana Jones and the Raiders of the Lost Ark", description: "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis." },
        { title: "Taken", description: "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris." },
        { title: "Black Hawk Down", description: "160 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis." },
        { title: "The Fast and the Furious", description: "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy." },
        { title: "Face/Off", description: "In order to foil a terrorist plot, an FBI agent undergoes facial transplant surgery and assumes the identity of a criminal mastermind, who murdered his only son." },
        { title: "Heat", description: "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist." },
        { title: "The Equalizer", description: "A man believes he has put his mysterious past behind him and has dedicated himself to beginning a new, quiet life. But when he meets a young girl under the control of ultra-violent Russian gangsters, he can't stand idly by." },
        { title: "Casino", description: "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast-living and fast-loving socialite." },
        { title: "True Lies", description: "A fearless, globe-trotting, terrorist-battling secret agent has his life turned upside down when he discovers his wife might be having an affair with a used-car salesman while terrorists smuggle nuclear warheads into the United States." },
        { title: "The Italian Job", description: "After being betrayed and left for dead in Italy, Charlie Croker and his team plan an elaborate gold heist against their former ally." },
        { title: "The Expendables", description: "A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent." },
        { title: "Blood Diamond", description: "A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond." },
        { title: "The Fugitive", description: "Dr. Richard Kimble, unjustly accused of murdering his wife, must find the real killer while being the target of a nationwide manhunt led by a seasoned U.S. Marshal." },
        { title: "Ronin", description: "A freelancing former U.S. intelligence agent tries to track down a mysterious package that is wanted by the Irish and the Russians." },
        { title: "Crank", description: "Professional assassin Chev Chelios learns his rival has injected him with a poison that will kill him if his heart rate drops." },
        { title: "Mr. & Mrs. Smith", description: "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other." },
        { title: "Salt", description: "A CIA agent goes on the run after a defector accuses her of being a Russian spy." },
        { title: "Taken 2", description: "In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter." },
        { title: "Furious 7", description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother." },
        { title: "The Equalizer 2", description: "Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?" },
        { title: "Speed 2: Cruise Control", description: "A computer hacker breaks into the computer system of the Seabourn Legend cruise liner and sets it speeding on a collision course into a gigantic oil tanker." },
        { title: "The Transporter", description: "Frank is hired to transport packages for unknown clients and has made a very good living doing so. But when asked to move a package that begins moving, complications arise." },
        { title: "Tango & Cash", description: "Two cops are framed and must clear their names." },
        { title: "The Italian Job", description: "After being betrayed and left for dead in Italy, Charlie Croker and his team plan an elaborate gold heist against their former ally." },
        { title: "Under Siege", description: "An ex-Navy Seal turned cook is the only person who can stop a group of terrorists when they seize control of a U.S. battleship." },
        { title: "Air Force One", description: "Communist Radicals hijack Air Force One with The U.S. President and his family on board. The Vice President negotiates from Washington D.C., while the President, a Veteran, fights to rescue the hostages on board." },
        { title: "The Raid: Redemption", description: "A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs." },
        { title: "Point Break", description: "An F.B.I. Agent goes undercover to catch a gang of surfers who may be bank robbers." },
        { title: "Taken 3", description: "Accused of a ruthless murder he never committed or witnessed, Bryan Mills goes on the run and brings out his particular set of skills to find the true killer and clear his name." },
        { title: "Speed Racer", description: "A young driver, Speed Racer, aspires to be champion of the racing world with the help of his family and his high-tech Mach 5 automobile." },
        { title: "The Expendables 2", description: "Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat." },
        { title: "Triple Frontier", description: "Loyalties are tested when five former Special Forces operatives reunite to steal a drug lord's fortune, unleashing a chain of unintended consequences." },
        { title: "The 6th Day", description: "Futuristic action about a man who meets a clone of himself and stumbles into a grand conspiracy about clones taking over the world." },
        { title: "The Protector", description: "A young fighter named Kham must go to Australia to retrieve his stolen elephant. With the help of a Thai-born Australian detective, Kham must take on all comers, including a gang led by an evil woman and her two deadly bodyguards." },
        { title: "The Marine", description: "A group of diamond thieves on the run kidnap the wife of a recently discharged marine who goes on a chase through the South Carolinian wilderness to retrieve her." }
    ],
    comedy :[
        { title:"Mr. Bean's Holiday",description:"Mr. Bean wins a trip to Cannes where he unwittingly separates a young boy from his father and must help the two reunite. On the way he discovers France, bicycling, and true love."},
        { title: "Superbad", description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry." },
        { title: "The Hangover", description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing." },
        { title: "Anchorman: The Legend of Ron Burgundy", description: "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change for Ron and his cronies when an ambitious woman is hired as a new anchor." },
        { title: "Bridesmaids", description: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef." },
        { title: "Dumb and Dumber", description: "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it." },
        { title: "The Grand Budapest Hotel", description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge." },
        { title: "The Big Lebowski", description: "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it." },
        { title: "Napoleon Dynamite", description: "A listless and alienated teenager decides to help his new friend win the class presidency in their small western high school, while he must deal with his bizarre family life back home." },
        { title: "Monty Python and the Holy Grail", description: "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles." },
        { title: "Shaun of the Dead", description: "A man's uneventful life is disrupted by the zombie apocalypse." },
        { title: "Office Space", description: "Three company workers who hate their jobs decide to rebel against their greedy boss." },
        { title: "Hot Fuzz", description: "A skilled London cop is reassigned to a sleepy town that's harboring a dark secret." },
        { title: "Step Brothers", description: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry." },
        { title: "Zombieland", description: "A shy student trying to reach his family in Ohio, a gun-toting tough guy trying to find the last Twinkie, and a pair of sisters trying to get to an amusement park join forces to travel across a zombie-filled America." },
        { title: "The Grand Budapest Hotel", description: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend." },
        { title: "This Is Spinal Tap", description: "Spinal Tap, one of England's loudest bands, is chronicled by film director Marty DeBergi on what proves to be a fateful tour." },
        { title: "The 40-Year-Old Virgin", description: "Goaded by his buddies, a nerdy guy who's never 'done the deed' only finds the pressure mounting when he meets a single mother." },
        { title: "Ferris Bueller's Day Off", description: "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that." },
        { title: "Airplane!", description: "A man afraid to fly must ensure that a plane lands safely after the pilots become sick." },
        { title: "Anchorman 2: The Legend Continues", description: "With the 1970s behind them, San Diego's top-rated newsman, Ron Burgundy, returns to take New York City's first twenty-four-hour news channel by storm." },
        { title: "Groundhog Day", description: "A weatherman finds himself inexplicably living the same day over and over again." },
        { title: "The Princess Bride", description: "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies, and allies in his quest to be reunited with his true love." },
        { title: "Young Frankenstein", description: "An American grandson of the infamous scientist struggles to prove that he is not as insane as people believe." },
        { title: "Dodgeball: A True Underdog Story", description: "A group of misfits enter a Las Vegas dodgeball tournament in order to save their cherished local gym from the onslaught of a corporate health fitness chain." },
        { title: "Old School", description: "Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater." },
        { title: "The Naked Gun: From the Files of Police Squad!", description: "Incompetent police Detective Frank Drebin must foil an attempt to assassinate Queen Elizabeth II." },
        { title: "Mrs. Doubtfire", description: "After a bitter divorce, an actor disguises himself as a female housekeeper to spend time with his children held in custody by his former wife." },
        { title: "Anchorman: Wake Up, Ron Burgundy", description: "The original story of Ron Burgundy's lost days after being fired from Channel 4 News." },
        { title: "School of Rock", description: "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band." },
        { title: "Wayne's World", description: "Two slacker friends try to promote their public-access cable show." },
        { title: "Super Troopers", description: "Five Vermont state troopers, avid pranksters with a knack for screwing up, try to save their jobs and out-do the local police department by solving a crime." },
        { title: "The Mask", description: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask." },
        { title: "Tropic Thunder", description: "Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying." },
        { title: "Wedding Crashers", description: "John Beckwith and Jeremy Grey, a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air, find themselves at odds with one another when John meets and falls for Claire Cleary." },
        { title: "Ghostbusters", description: "Three former parapsychology professors set up shop as a unique ghost removal service." },
        { title: "Austin Powers: International Man of Mystery", description: "A 1960s secret agent is brought out of cryofreeze to oppose his greatest enemy in the 1990s, where his social attitudes are glaringly out of place." },
        { title: "The Blues Brothers", description: "Jake Blues, just released from prison, puts together his old band to save the Catholic home where he and his brother Elwood were raised." },
        { title: "Hot Shots!", description: "A parody of Top Gun (1986) in which a talented but unstable fighter pilot must overcome the ghosts of his father and save a mission sabotaged by greedy weapons manufacturers." },
        { title: "Caddyshack", description: "An exclusive golf course has to deal with a brash new member and a destructive dancing gopher." },
        { title: "The Life Aquatic with Steve Zissou", description: "With a plan to exact revenge on a mythical shark that killed his partner, oceanographer Steve Zissou rallies a crew that includes his estranged wife, a journalist, and a man who may or may not be his son." },
        { title: "Bruce Almighty", description: "A guy who complains about God too often is given almighty powers to teach him how difficult it is to run the world." },
        { title: "Meet the Parents", description: "Male nurse Greg Focker meets his girlfriend's parents before proposing, but her suspicious father is every date's worst nightmare." },
        { title: "American Pie", description: "Four teenage boys enter a pact to lose their virginity by prom night." },
        { title: "Ace Ventura: Pet Detective", description: "A goofy detective specializing in animals goes in search of a missing dolphin mascot of a football team." },
        { title: "The Producers", description: "After putting together another Broadway flop, down-on-his-luck Producer Max Bialystock teams up with timid accountant Leo Bloom in a get-rich-quick scheme to put on the world's worst show." },
        { title: "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan", description: "Journalist Borat Sagdiyev leaves his native Kazakhstan to travel to America to make a documentary. As he zigzags across the nation, Borat meets real people in real situations with hysterical consequences." },
        { title: "Trading Places", description: "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires." },
        { title: "Coming to America", description: "An extremely pampered African prince travels to Queens, New York City, and goes undercover to find a wife that he can respect for her intelligence and strong will." },
        { title: "The Pink Panther", description: "Bumbling Inspector Clouseau must solve the murder of a famous soccer coach and find out who stole the infamous Pink Panther diamond." },
        { title: "Shrek", description: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back." },
        { title: "Wayne's World 2", description: "The inseparable duo tries to organize a rock concert while Wayne must fend off a record producer who has an eye for his girlfriend." },
        { title: "My Cousin Vinny", description: "Two New Yorkers are accused of murder in rural Alabama while on their way back to college, and one of their cousins--an inexperienced, loudmouth lawyer--takes on their case." }
    ],
    horror :[
        { title:"The Nun",description:"A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun."},
        { title: "The Conjuring", description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse." },
        { title: "Hereditary", description: "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets." },
        { title: "A Quiet Place", description: "In a post-apocalyptic world, a family must survive by living in silence to avoid mysterious creatures that hunt by sound." },
        { title: "The Babadook", description: "A single mother and her son are haunted by a sinister presence after reading a mysterious children's book." },
        { title: "The Witch", description: "A family in 1630s New England faces unsettling events after they move to a secluded farm on the edge of a forest rumored to be controlled by witches." },
        { title: "Get Out", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point." },
        { title: "Us", description: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them." },
        { title: "It Follows", description: "A young woman is followed by an unknown supernatural force after a sexual encounter." },
        { title: "The Exorcist", description: "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her." },
        { title: "Psycho", description: "A secretary embezzles money, goes on the run, and checks into a remote motel run by a disturbed young man." },
        { title: "Scream", description: "A masked killer begins killing off teenagers, and as the body count rises, one girl and her friends try to uncover the killer's identity." },
        { title: "The Ring", description: "A journalist investigates a mysterious videotape that seems to cause the death of anyone one week after they watch it." },
        { title: "The Silence of the Lambs", description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer." },
        { title: "The Sixth Sense", description: "A young boy who communicates with spirits seeks the help of a disheartened child psychologist." },
        { title: "The Blair Witch Project", description: "Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend." },
        { title: "Paranormal Activity", description: "A couple becomes increasingly disturbed by a presence that may or may not be demonic, while being recorded during their sleep." },
        { title: "Insidious", description: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further." },
        { title: "Annabelle", description: "A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists." },
        { title: "The Grudge", description: "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse that locks a person in a powerful rage before claiming their life." },
        { title: "Candyman", description: "The Candyman, a murderous soul with a hook for a hand, is accidentally summoned to reality by a skeptic grad student researching the monster's myth." },
        { title: "The Texas Chain Saw Massacre", description: "Two siblings and their friends encounter a family of cannibals while visiting their grandfather's grave in Texas." },
        { title: "Rosemary's Baby", description: "A young couple moves into an apartment, only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins to control her life." },
        { title: "Poltergeist", description: "A family's home is haunted by a host of ghosts." },
        { title: "Nightmare on Elm Street", description: "The monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death." },
        { title: "The Omen", description: "Mysterious deaths surround an American ambassador and his family in England after he becomes convinced that his adopted son is the Antichrist." },
        { title: "The Others", description: "A woman who lives in her darkened old family house with her two photosensitive children becomes convinced that the home is haunted." },
        { title: "28 Days Later", description: "Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary." },
        { title: "The Descent", description: "A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators." },
        { title: "The Fly", description: "A brilliant but eccentric scientist begins to transform into a giant man/fly hybrid after one of his experiments goes horribly wrong." },
        { title: "Drag Me to Hell", description: "A loan officer who evicts an old woman from her home finds herself the recipient of a supernatural curse." },
        { title: "The Shining", description: "A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence." },
        { title: "The Cabin in the Woods", description: "Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods." },
        { title: "IT", description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town." },
        { title: "Sinister", description: "Washed-up true-crime writer Ellison Oswalt finds a box of super 8 home movies in his new home that suggest the murder he is currently researching is the work of a serial killer whose work dates back to the 1960s." },
        { title: "Midsommar", description: "A couple travels to Sweden to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult." },
        { title: "Don't Breathe", description: "Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn't as helpless as he seems." },
        { title: "The Invisible Man", description: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see." },
        { title: "The Ritual", description: "A group of college friends reunite for a trip to the forest, but encounter" }
    ],
    romance :[
        {title:"Dilwale",description:"The siblings of two estranged lovers fall for each other, unaware of the violent past that drove them apart."},
        { title: "Pride and Prejudice", description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy." },
        { title: "The Notebook", description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences." },
        { title: "Titanic", description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic." },
        { title: "La La Land", description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future." },
        { title: "Romeo + Juliet", description: "Shakespeare's famous play is updated to the hip modern suburb of Verona still retaining its original dialogue." },
        { title: "500 Days of Summer", description: "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her." },
        { title: "Before Sunrise", description: "A young man and woman meet on a train in Europe and wind up spending one evening together in Vienna." },
        { title: "The Fault in Our Stars", description: "Two teenagers with cancer fall in love and embark on a journey to visit a reclusive author in Amsterdam." },
        { title: "Casablanca", description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco." },
        { title: "The Princess Bride", description: "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies, and allies in his quest to be reunited with his true love." },
        { title: "Notting Hill", description: "The life of a simple bookshop owner changes when he meets the most famous film star in the world." },
        { title: "Eternal Sunshine of the Spotless Mind", description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories." },
        { title: "Silver Linings Playbook", description: "After a stint in a mental institution, a former teacher moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when he meets a mysterious girl with problems of her own." },
        { title: "About Time", description: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think." },
        { title: "Brokeback Mountain", description: "The story of a forbidden and secretive relationship between two cowboys and their lives over the years." },
        { title: "Her", description: "In a near-future Los Angeles, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need." },
        { title: "A Star Is Born", description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral." },
        { title: "Before Sunset", description: "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour." },
        { title: "Moulin Rouge!", description: "A poet falls for a beautiful courtesan whom a jealous duke covets." },
        { title: "The Shape of Water", description: "At a top-secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity." },
        { title: "Jerry Maguire", description: "When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him and his former colleague." },
        { title: "The Holiday", description: "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love." },
        { title: "A Walk to Remember", description: "The story of two North Carolina teens, Landon Carter and Jamie Sullivan, who are thrown together after Landon gets into trouble and is made to do community service." },
        { title: "The Time Traveler's Wife", description: "A Chicago librarian has a gene that causes him to involuntarily time travel, creating complications in his marriage." },
        { title: "Amélie", description: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love." },
        { title: "The Bridges of Madison County", description: "Photographer Robert Kincaid wanders into the life of housewife Francesca Johnson for four days in the 1960s." },
        { title: "The Vow", description: "A car accident puts Paige in a coma, and when she wakes up with severe memory loss, her husband Leo works to win her heart again." },
        { title: "Love, Rosie", description: "Rosie and Alex have been best friends since they were five, so they couldn't possibly be right for one another...or could they?" },
        { title: "One Day", description: "After spending the night together on the night of their college graduation, Dexter and Em are shown each year on the same date to see where they are in their lives." },
        { title: "Crazy, Stupid, Love", description: "A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob, learning to pick up girls at bars." },
        { title: "50 First Dates", description: "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry thinks he's finally found the girl of his dreams until discovering she has short-term memory loss and forgets him the very next day." },
        { title: "Bridget Jones's Diary", description: "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary." },
        { title: "You've Got Mail", description: "Two business rivals who despise each other in real life unwittingly fall in love over the internet." },
        { title: "Forgetting Sarah Marshall", description: "Devastated Peter takes a Hawaii vacation to deal with recent break-up, only to find his ex-girlfriend and her new boyfriend at the same hotel." },
        { title: "Serendipity", description: "A couple reunite years after the night they first met, fell in love, and separated, convinced that one day they'd end up together." },
        { title: "The Proposal", description: "A pushy boss forces her young assistant to marry her to keep her visa status in the U.S. and avoid deportation to Canada." },
        { title: "Something's Gotta Give", description: "A swinger on the cusp of being a senior citizen with a taste for young women falls in love with an accomplished woman closer to his age." },
        { title: "10 Things I Hate About You", description: "A pretty, popular teenager can't go out on a date until her ill-tempered older sister does." },
        { title: "The Princess Diaries", description: "Mia Thermopolis has just found out that she is the heir apparent to the throne of Genovia. With her friends Lilly and Michael Moscovitz in tow, she tries to navigate through the rest of her sixteenth year." },
        { title: "When Harry Met Sally", description: "Harry and Sally have known each other for years and are very good friends, but they fear sex would ruin the friendship." },
        { title: "Atonement", description: "Fledgling writer Briony Tallis, as a thirteen-year-old, irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit." },
        { title: "Mamma Mia!", description: "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA." },
        { title: "About a Boy", description: "A cynical, immature young man is taught how to act like a grown-up by a little boy." },
        { title: "The Fault in Our Stars", description: "Two teenagers with cancer fall in love and embark on a journey to visit a reclusive author in Amsterdam." },
        { title: "Love Actually", description: "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London." },
        { title: "The Lake House", description: "A lonely doctor who once occupied an unusual lakeside home begins exchanging love letters with its former resident, a frustrated architect." },
        { title: "Silver Linings Playbook", description: "After a stint in a mental institution, a former teacher moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when he meets a mysterious girl with problems of her own." },
        { title: "Serendipity", description: "A couple reunite years after the night they first met, fell in love, and separated, convinced that one day they'd end up together." },
        { title: "The Age of Adaline", description: "A young woman, born at the turn of the 20th century, is rendered ageless after an accident. After years of a solitary life, she meets a man who might be worth losing her immortality." }
    ]
};
function getRandomMovie(genre){
    const moviesByGenre = movies[genre];
    for(let index=0;index<10;index++){
        displayMovie(moviesByGenre[Math.floor(Math.random()*moviesByGenre.length)],genre,index);
    }
}
function displayMovie(movie,genre,num){
    const movieDisplay = document.getElementById(`${genre}Movie${num}`);
    movieDisplay.innerHTML = `
    <fieldset class="${genre}Display">
    <legend>${movie.title}</legend>
    <p>${movie.description}</p>
    </fieldset>`;
}
