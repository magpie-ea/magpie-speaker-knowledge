let raw_filler_trial_info = [
  {
    type: "filler",
    ID: 1,
    context: `I drove to the mall yesterday.`,
    context_length: 6,
    trigger: `I stayed in the Apple store for one hour while looking at a new iMac before stopping at JC Penny's on the way home.`,
    trigger_length: 24,
    continuation: ``,
    question: `Did the Apple store have a recently released computer?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 2,
    context: `Tonight I will watch my favorite television show.`,
    context_length: 8,
    trigger: `It is about people who travel through time in a telephone box.`,
    trigger_length: 12,
    continuation: `They have a robot dog.`,
    question: `Is the television show about aliens? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 3,
    context: `Everyone knows that M*A*S*H took place during the Korean War.`,
    context_length: 10,
    trigger: `I just realized that Alan Alda played Hawkeye Pierce, a doctor on the television show M*A*S*H.`,
    trigger_length: 16,
    continuation: `It's one of my favorite shows so I'm embarrassed that I did not know the lead actor.`,
    question: `Did I realize that M*A*S*H took place in Asia?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 4,
    context: `I read fantasy novels every week.`,
    context_length: 6,
    trigger: `I enjoy Terry Pratchett's novels especially.`,
    trigger_length: 6,
    continuation: `His stories are funny and sarcastic.`,
    question: `Does Terry Pratchett write fantasy books? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 5,
    context: `Each week I write at least one response paper.`,
    context_length: 9,
    trigger: `This week I wrote two.`,
    trigger_length: 5,
    continuation: `One was for psychology and another was for classics.`,
    question: `Did I write more papers than usual this week? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 6,
    context: `When I arrived in the parking lot today I saw an expensive red Ferrari.`,
    context_length: 14,
    trigger: `When I left for lunch it was gone.`,
    trigger_length: 8,
    continuation: ``,
    question: `Was the Ferrari black? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 7,
    context: `After dinner, I listen to Celtic music and read a book.`,
    context_length: 11,
    trigger: `Today I listened to classic rock instead of Celtic music.`,
    trigger_length: 10,
    continuation: ``,
    question: `Did I still read a book? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 8,
    context: `I wear my favorite shirt every week.`,
    context_length: 7,
    trigger: `I make sure to wash some of my clothes each week.`,
    trigger_length: 11,
    continuation: `I always wash my shirts before I wear them again.`,
    question: `Do I wash my favorite shirt every week?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 9,
    context: `Yesterday I went to a Led Zeppelin concert.`,
    context_length: 8,
    trigger: `I only go to see bands that I really like. They played for about an hour.`,
    trigger_length: 16,
    continuation: ``,
    question: `Do I like Led Zeppelin? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 10,
    context: `Today the dining hall is serving salmon for dinner.`,
    context_length: 9,
    trigger: `I don't like fish.`,
    trigger_length: 4,
    continuation: `If I don't like what is being served, I will eat somewhere else.`,
    question: `Will I eat in the dining hall? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 11,
    context: `I turned on my computer today to check my email.`,
    context_length: 10,
    trigger: `I have been waiting to hear from my mother.`,
    trigger_length: 9,
    continuation: `I had no new email.`,
    question: `Did my mother write to me? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 12,
    context: `Tomorrow I will go to the dentist to have a cavity filled.`,
    context_length: 12,
    trigger: `Everyone knows that flossing prevents cavities, but I haven't flossed enough.`,
    trigger_length: 11,
    continuation: `I will try to brush my teeth more frequently.`,
    question: `Does everyone know that brushing teeth prevents cavities? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 13,
    context: `Today the United Nations announced in New York City a new plan for world peace.`,
    context_length: 15,
    trigger: `I would like to be a United Nations ambassador for the United States but don't want to travel to Europe.`,
    trigger_length: 20,
    continuation: `Luckily, the United Nations is based in New York.`,
    question: `Did I realize that New York City is in the United States? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 14,
    context: `Because of the nice weather, I put the top down on my convertible.`,
    context_length: 13,
    trigger: ` I was afraid of sunburning my head, so I wore a hat.`,
    trigger_length: 12,
    continuation: ``,
    question: `Did my head get sunburned?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 15,
    context: `Each member of my family uses a Windows PC.`,
    context_length: 9,
    trigger: `I prefer to use an Apple Mac for my laptop.`,
    trigger_length: 10,
    continuation: `Campus computers use Mac almost exclusively.`,
    question: `Is it easier to use Mac on campus? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 16,
    context: `I enjoy driving my car when I am home from school.`,
    context_length: 11,
    trigger: `Motorcycles use less fuel, but they are more dangerous.`,
    trigger_length: 9,
    continuation: ``,
    question: `Would I rather be more fuel efficient? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 17,
    context: `I got sick with a cold over the weekend.`,
    context_length: 9,
    trigger: `I am still taking decongestants.`,
    trigger_length: 5,
    continuation: ``,
    question: `Am I well yet? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 18,
    context: `Today I declared a major in Psychology.`,
    context_length: 7,
    trigger: `I am also interested in a minor in Theatre.`,
    trigger_length: 9,
    continuation: `I cannot do more than one major and minor or two majors.`,
    question: `Am I also majoring in Philosophy? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 19,
    context: `I love to listen to music.`,
    context_length: 6,
    trigger: `I could spend hours just listening to Pink Floyd.`,
    trigger_length: 9,
    continuation: `The radio doesn't play music I like, so I listen to my iPod.`,
    question: `Does the radio play Pink Floyd? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 20,
    context: `I am a big Star Wars fan.`,
    context_length: 7,
    trigger: `I have seen every movie and read every book.`,
    trigger_length: 9,
    continuation: `I can't stand it when they make TV shows out of movies.`,
    question: `Have I seen the Star Wars TV show? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 21,
    context: `Neil Patrick Harris is my favorite actor.`,
    context_length: 7,
    trigger: `Harris stars in my favorite TV show.`,
    trigger_length: 7,
    continuation: `I wish I could meet him.`,
    question: `Have I acted with Neil Patrick Harris? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 22,
    context: `I can't stand fruit-flavored candy.`,
    context_length: 5,
    trigger: `I make exceptions for lemon lollipops and chewy candy, though.`,
    trigger_length: 10,
    continuation: ``,
    question: `Do I like cherry gumdrops? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 23,
    context: `There was a thunderstorm today.`,
    context_length: 5,
    trigger: `I think that thunderstorms are romantic.`,
    trigger_length: 6,
    continuation: `My professor became annoyed because he could not speak over the thunder. `,
    question: `Was I in class during the thunderstorm? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 24,
    context: `I love to play card games with my friends, and we are going to play Hearts tonight.`,
    context_length: 17,
    trigger: `We always enjoy playing a game on Sunday evening.`,
    trigger_length: 9,
    continuation: ``,
    question: `Is tonight Sunday?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 25,
    context: `Yesterday, my cat scratched my arm.`,
    context_length: 6,
    trigger: `She is normally quite friendly.`,
    trigger_length: 5,
    continuation: `I have had her for the last three years.`,
    question: `Was I surprised that the cat scratched my arm? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 26,
    context: `This summer I will not have air conditioning in my house.`,
    context_length: 11,
    trigger: `I prefer the weather in Massachusetts, where it is colder.`,
    trigger_length: 10,
    continuation: `New England weather is always colder in the summer.`,
    question: `Do I prefer New England weather?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 27,
    context: `I use Post - It Notes to keep track of my homework.`,
    context_length: 11,
    trigger: `Sometimes I lose them, but the adhesive helps them stick to my notes.`,
    trigger_length: 13,
    continuation: ``,
    question: `Do I write my assignments in a notebook?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 28,
    context: `My headphones broke yesterday.`,
    context_length: 4,
    trigger: `I will have to buy new ones from the store when it opens tomorrow.`,
    trigger_length: 14,
    continuation: `I wish stores were open on the weekend.`,
    question: `Do I have another pair of headphones?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 29,
    context: `Over the weekend I saw a play.`,
    context_length: 7,
    trigger: `The student theatre group put it on.`,
    trigger_length: 7,
    continuation: `If the actors could sing it would sound nicer.`,
    question: `Is the play a musical?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 30,
    context: `Each weekend I do my laundry.`,
    context_length: 6,
    trigger: `I have sports practice each week. `,
    trigger_length: 6,
    continuation: ``,
    question: `Do I wash my sports clothes each week? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 31,
    context: `I have seen a mouse living in my apartment.`,
    context_length: 9,
    trigger: `Yesterday, it ate a bar of chocolate, even though the candy was in a closed plastic container.`,
    trigger_length: 17,
    continuation: ``,
    question: `Did the mouse find a way into the plastic container? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 32,
    context: `Last summer I went to Chicago on vacation.`,
    context_length: 8,
    trigger: `When I was there, I visited the Art Institute and saw a painting by Georges Seurat.`,
    trigger_length: 16,
    continuation: `It was much bigger than I thought it would be.`,
    question: `Did the painting conform to my expectations?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 33,
    context: `My favorite fruit used to be raspberries.`,
    context_length: 7,
    trigger: `When I was younger, I saw a bug in one of my raspberries, and I haven't eaten one since.`,
    trigger_length: 19,
    continuation: ``,
    question: `Do I still enjoy raspberries?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 34,
    context: `I went to the movie theater last weekend.`,
    context_length: 8,
    trigger: `The movie I'd planned on seeing was sold out, so I bought tickets for the next available show.`,
    trigger_length: 18,
    continuation: ``,
    question: `Did I eat ice cream that evening? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 35,
    context: `My grandparents have a clock that imitates birdcalls.`,
    context_length: 8,
    trigger: `Sometimes, when it strikes the hour, I think there is a rare bird nearby.`,
    trigger_length: 14,
    continuation: ``,
    question: `Does the bird clock fool me?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 36,
    context: `I planned to have a picnic in the park.`,
    context_length: 9,
    trigger: `The weather forecast predicted rain, so I thought I would have to cancel it.`,
    trigger_length: 14,
    continuation: `However, the day turned out sunny after all.`,
    question: `Did the weather prevent me from having a picnic?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 37,
    context: `I enjoy playing board games with my uncle.`,
    context_length: 8,
    trigger: `The last time we played together, I thought I had won.`,
    trigger_length: 11,
    continuation: `When we tallied up the scores I discovered that he beat me by one point.`,
    question: `Did my uncle beat me by a lot of points?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 38,
    context: `In the mornings, I go jogging because that is when I can fit it into my schedule.`,
    context_length: 17,
    trigger: `I like exercising then because the weather is cooler than it is during the afternoon.`,
    trigger_length: 15,
    continuation: `Also, the paths are not very crowded.`,
    question: `Are there multiple reasons why I prefer to run in the morning?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 39,
    context: `I have often heard that carrots help you see in the dark.`,
    context_length: 12,
    trigger: `I once ate an entire bag of carrots and then turned the light off.`,
    trigger_length: 14,
    continuation: `The carrots must have failed, because I couldn 't see anything.`,
    question: `Did eating carrots give me night vision?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 40,
    context: `My friend told me that my favorite band was giving a concert in my hometown.`,
    context_length: 15,
    trigger: `I checked their website to see if tickets were still available.`,
    trigger_length: 11,
    continuation: `I even managed to get a discount.`,
    question: `Am I planning on going to the concert?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 41,
    context: `I got my hair cut at a salon in town.`,
    context_length: 10,
    trigger: `I wanted a trim, but the stylist cut it too short.`,
    trigger_length: 11,
    continuation: `Now my hair looks completely different.`,
    question: `Was I satisfied with my haircut?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 42,
    context: `I was having a party, so I went to the grocery store to buy food.`,
    context_length: 15,
    trigger: `I accidentally dropped a jar of salsa on the floor.`,
    trigger_length: 10,
    continuation: `It splashed all over the pants I was planning to wear at the party.`,
    question: `Will I have to change my outfit before the party?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 43,
    context: `I built a new bookshelf for my bedroom.`,
    context_length: 8,
    trigger: `It was very difficult to do, because I lost the instructions for putting it together.`,
    trigger_length: 15,
    continuation: `The next day, it fell apart again.`,
    question: `Was my bookshelf sturdy?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 44,
    context: `My hobby is knitting.`,
    context_length: 4,
    trigger: `I have learned to knit really fast, even when I'm thinking of something else.`,
    trigger_length: 14,
    continuation: `Sometimes, I can knit and read at the same time.`,
    question: `Does knitting require all of my attention?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 45,
    context: `When I was babysitting my cousin, we did an art project.`,
    context_length: 11,
    trigger: `We spread newspaper on the floor so it wouldn't get paint on it.`,
    trigger_length: 13,
    continuation: `We still got paint on our clothes, though.`,
    question: `Did the newspaper keep the floor clean?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 46,
    context: `I recently redecorated my bedroom.`,
    context_length: 5,
    trigger: `I picked out blue paint for my walls.`,
    trigger_length: 8,
    continuation: `When the paint arrived, I discovered that it was a darker blue than the color I wanted.`,
    question: `Was I happy with the new color of my walls?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 47,
    context: `I planted tomato plants in my backyard.`,
    context_length: 7,
    trigger: `By the time the tomatoes became ripe, wild animals had already eaten most of them.`,
    trigger_length: 15,
    continuation: ``,
    question: `Was I able to eat any of the tomatoes I planted?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 48,
    context: `When I was driving to work, my favorite song came on the radio.`,
    context_length: 13,
    trigger: `I started to sing along really loudly.`,
    trigger_length: 7,
    continuation: `Afterwards, I realized that my windows had been open and other drivers had been staring at me.`,
    question: `While the song was on, was I paying attention to my surroundings?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 49,
    context: `The weather was so warm that I decided to do my homework outside.`,
    context_length: 13,
    trigger: `I sat beside a fountain that's in the park near my house.`,
    trigger_length: 12,
    continuation: `Suddenly, a loud noise startled me, and I dropped my textbook in the water.`,
    question: `Should I have chosen a different place to sit?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 50,
    context: `On Saturday my friends and I played miniature golf.`,
    context_length: 9,
    trigger: `I played pretty well, but my scores fluctuated a lot.`,
    trigger_length: 10,
    continuation: `At one hole, my ball got stuck on a windmill, but at the next, I got a hole in one. `,
    question: `Did my trouble with the windmill cause me to lose the game?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 51,
    context: `For my birthday, my family bought me an ice cream cake.`,
    context_length: 11,
    trigger: `The inside of it was mint-chocolate chip, my favorite ice cream flavor.`,
    trigger_length: 12,
    continuation: `The cake also had my name on the top in blue and green icing. `,
    question: `Did my family remember my birthday this year? `,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 52,
    context: `After my brother's wedding, I helped him address the envelopes to his thank-you notes.`,
    context_length: 14,
    trigger: `When I finished, my hand was sore from all the writing.`,
    trigger_length: 11,
    continuation: `I was glad I didn 't have to write the letters, as well.`,
    question: `Was my task a tiring one?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 53,
    context: `I just became vegan, so it's difficult to find restaurants with food I can eat.`,
    context_length: 15,
    trigger: `A few blocks from my house, there's a cafe that only serves vegan food.`,
    trigger_length: 14,
    continuation: `When my friends want to eat out, I usually suggest we go there.`,
    question: `Have I found many restaurants with vegan dishes?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 54,
    context: `I went to the zoo, but my favorite animals were all asleep.`,
    context_length: 12,
    trigger: `One of the pandas had sprawled out on a rock.`,
    trigger_length: 10,
    continuation: `I was happy I'd gotten a chance to see it, even though it was sleeping. `,
    question: `Were any of the animals sitting out in the open?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 55,
    context: `In the city, I saw a street performer who did magic tricks.`,
    context_length: 12,
    trigger: `She picked me as a volunteer for her act, and asked me to knot ropes around her.`,
    trigger_length: 17,
    continuation: `I thought I tied them very tightly, but she still managed to escape.`,
    question: `Did my knots effectively trap the performer?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 56,
    context: `I took my little sister to the beach.`,
    context_length: 8,
    trigger: `The water was too cold to swim in, so we played on land instead.`,
    trigger_length: 14,
    continuation: `We made a sandcastle and then took turns burying each other in the sand.`,
    question: `Did we get covered with sand during this trip?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 57,
    context: `When I was driving on the highway, a car nearly crashed into me because it was going too fast.`,
    context_length: 19,
    trigger: `Later on, I noticed the same car on the side of the road.`,
    trigger_length: 13,
    continuation: `It looked to me like a police officer was giving the driver a ticket.`,
    question: `Did I get into an accident on the highway?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 58,
    context: `I lost my cell phone at a theater.`,
    context_length: 8,
    trigger: `I looked under all the seats around me, but I didn't see it.`,
    trigger_length: 13,
    continuation: `I couldn 't even find it by calling it and listening for the ring, because I had turned it off before the performance.`,
    question: `Had my phone rung during the show?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 59,
    context: `I was swimming laps in my local pool when I noticed something at the bottom.`,
    context_length: 15,
    trigger: `When I dove down, I realized it was a twenty-dollar bill.`,
    trigger_length: 11,
    continuation: `Nobody claimed it when I asked the people nearby, so I kept it.`,
    question: `Was I lucky to have noticed the object in the water?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 60,
    context: `I usually let my cat go outside for a couple hours every night.`,
    context_length: 13,
    trigger: `Last night, I forgot to let him back in until the next morning.`,
    trigger_length: 13,
    continuation: `The minute I opened the door, he ran inside to his food bowl.`,
    question: `Did being locked out all night make my cat hungry?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 61,
    context: `When I talked to my parents yesterday, they told me that they did not pay taxes this year.`,
    context_length: 18,
    trigger: `They have decided that all taxation is theft.`,
    trigger_length: 8,
    continuation: `I am worried about their decision, since they might go to prison.`,
    question: `Do my parents always obey the law?`,
    correct: "no"
  },
  {
    type: "filler",
    ID: 62,
    context: `After I got back from my trip to the equator, I started feeling very ill.`,
    context_length: 15,
    trigger: `My doctor told me I had contracted a rare tropical disease.`,
    trigger_length: 11,
    continuation: `Luckily, there are drugs which effectively treat it, and I am now healthy.`,
    question: `Did I see a doctor after I started feeling ill?`,
    correct: "yes"
  },
  {
    type: "filler",
    ID: 63,
    context: `My daughter asked me to make brownies for the bake sale at her school.`,
    context_length: 14,
    trigger: `At the sale, my brownies sold out during the first hour.`,
    trigger_length: 11,
    continuation: `They were so popular that some of the other parents asked me for the recipe.`,
    question: `Did the people at the bake sale think my brownies were disgusting? `,
    correct: "no"
  },
  {
    type: "filler",
    ID: 64,
    context: `As the editor of the newspaper, I have to make sure that the paper does not publish anything that is offensive.`,
    context_length: 21,
    trigger: ` Unfortunately, a disgruntled writer slipped a racial slur into an article last week.`,
    trigger_length: 13,
    continuation: `I issued a long apology on the front page of the paper the next day.`,
    question: `Did the writer ask me before inserting the slur into his article?`,
    correct: "no"
  },
  {
    type: "filler ",
    ID: 65,
    context: `Because of the snow storm, my plane was eight hours late.`,
    context_length: 11,
    trigger: `Though I tried to make the best of my time in the airport, there wasn't much for me to do.`,
    trigger_length: 20,
    continuation: `I ended up solving crossword puzzles for most of the time.`,
    question: `Did I use my time in the airport productively?`,
    correct: "no"
  }
];
