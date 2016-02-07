(function () {
    'use strict';

    angular
        .module('eliteApp')
        .factory('eliteApi', [eliteApi])
    function eliteApi() {
        var leagues = [
            {
                "name": "6th Grade Saturday 2014-15 League",
                "id": 2029,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\n*\tThis League is designed for 6th Grade “B” Travel teams, and higher-level 5th Grade AAU caliber teams.\n*\t8 game minimum (will try to get 9 games scheduled if possible) plus/season ending tournament.  Plan is to end on February 28th.\n*\tSeason to start December 13th.\n*\tGames to be played at Centennial High School.\n*\tGame times 2pm and later.\n*\tMinimum 6 teams required.\n*\t$635 per team registration fee (includes referees fees).\n*\tAwards for 1st & 2nd Place in season ending tournament.\n*\t**All teams will be required to submit team rosters prior to the first game of the season.  Players must be in 5th/6th Grade and/or born after August 31, 2002.**\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call:\n\n* Inclement Weather Hotline for Howard County Schools: 410-313-6827",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n\n*\tThe first team listed (under V) on the schedule is considered VISITORS and should wear Dark Jerseys. Second team listed (under H) is HOME and wears White (light) jerseys.\n*\tHome Team Provides game Ball – It should be a NFHS approved 28.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n*\tEach team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.\n*\t20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n*\tTwo 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n*\t**Free Throw Bonus**: We’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \n*\t**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul. \n*\t**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls. So if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n*\tNo pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n*\t2 behavior related technical fouls result in removal from current and next game.\n*\tNo technical fouls for book errors. Just correct the mistake and move on.\n*\tTeams can start game with 4 players. If you have 4 players available at game time, the game must start.\n*\tOvertime - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul shot, one player at a time. All ten players shoot. If one team has made more shots than the other team after 10 shots, that team wins. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n*\tThe League Commissioner, Chris Steinbach (410-924-4324) will settle all disputes and rule interpretations. If Chris can’t be reached, the lead official will settle disputes or rules interpretations."
            },
            {
                "name": "7th Grade MS JV Friday 2014-15 League",
                "id": 2024,
                "homeScreen": "###Games that were cancelled from Friday 3/6 at Dunloggin and Mayfield Woods are now Monday, 3/9 at Veterans ES and Ellicott Mills MS.  See detailed schedule below. \n### \n\n# Playoff Brackets\n\n## Division 1 Bracket\n![Division 1 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d1.png)\n\n## Division 2 Bracket\n![Division 2 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d2.png)\n\n## Division 3 Bracket\n![Division 3 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d3.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules."
            },
            {
                "name": "7th Grade MS JV Saturday 2014-15 League",
                "id": 2025,
                "homeScreen": "# Playoff Brackets\n\n## Travel Team Bracket\n![Travel Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-jv-2015-d1.png)\n\n## Middle School Only Bracket\n![MS Only Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-jv-2015-ms-only.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball unless 2 6th grade teams are playing and they agree to use 28.5. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules."
            },
            {
                "name": "7th-8th Grade HC Invitational 2014-15 League",
                "id": 2028,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\nThe league will play a 10-game regular season with the last game on February 28. The following week there will be a single-elimination playoff to determine the champion.\n\nAll questions should be directed towards your coach.\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call one of these numbers:\n\n* Meadowbrook, Roger Carter, and North Laurel: 410-313-4452 (option 2)\n* One of the Howard County Schools: 410-313-6827\n\n## Playoff Bracket\n![Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-2015-hc-invitational.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules."
            },
            {
                "name": "8th Grade HYBA Spring 2015",
                "id": 2035,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\nThe season will consist of an 8-game regular season with no playoffs. The last game is on 6/5/2015 for about half the teams\nand 6/12/2015 for the other half.\n\nAll questions should be directed towards your coach or to the official [HYBA organization](http://hyba.org).\n\n### Have a great season!",
                "rulesScreen": "1. **HYBA Basketball** generally follows the National Federation of State High School Associations (NFHS) Basketball Rules, with the exception of HYBA league specific rules listed herein. \r\n2. **Quarters:** There are four, 10 minute quarters in each game with the running clock that stops only on time-outs and on all whistles in the last (1) minute of each quarter. \r\n3. **Time-outs:** Each team receives two (2) time-outs per game, which do not carry forward into an overtime period. \r\n4. **Overtime:** Overtimes consist of one-minute periods with a stop clock. There is one time out per team in the first over-time period, and no time-outs in subsequent periods. There is no sudden death. \r\n5. **Ball size:** The 29.5 circumference ball shall be used.\r\n6. **Fouls:** Players foul out on their 5th foul. \r\n7. **Free-throws:** Two free throws are awarded on and after the tenth team foul in each half. No one-and-one free throws are awarded. ALL shooting fouls shall be awarded two free throws when the fouls occur. \r\n8. **Technical Fouls:** One point, accompanied by an additional free-throw, and possession of the ball shall be awarded to the offended team. \r\n9. **Jump balls** shall occur at the start of the game and the start of each overtime period. \r\n10. **Full-court press:** No press rules when team is winning by 15 or more.\r\n11. **Team Equipment:** Players must wear appropriate apparel for the game of basketball. Only earrings that are tight to the ear (studs or very tight hoops) may be taped securely to permit respective player play. HYBA will provide uniform shirts to be worn during game. \r\n12. **Individual Registered Players:** must play the equivalent of two quarters. \r\n13. **Volunteers:** For each game, one team should provide a volunteer to work the scoreboard and the other to keep the scorebook.\r\n14. **Replacement players:** If replacement players are used (for teams short on players), the replacements must be registered HYBA players from 7th grade division.\r\n15. **Zero Tolerance:** There is **ZERO tolerance** on fighting, use of foul or abusive language, or other abusive behavior. Any player, coach, parent or fan violating this policy shall be suspended or expelled from the HYBA Basketball Program without warning."
            },
            {
                "name": "8th Grade MS Varsity Friday 2014-15 League",
                "id": 2026,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\nThe league will play a 10-game regular season with the last game on February 27. The following week there will be a single-elimination playoff to determine the champion. For playoffs, we will do 3 different divisions for parity. Additionally, there will be a \"Middle School Only\" playoff bracket as well.\n\nAll questions should be directed towards your coach.\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call one of these numbers:\n\n* Meadowbrook, Roger Carter, and North Laurel: 410-313-4452 (option 2)\n* One of the Howard County Schools: 410-313-6827\n\n# Playoff Brackets\n**Note: Playoff seeding was determined by a combination of: strength of schedule, win/loss record, head-to-head, and scores against common opponents.**\n\n## Travel Team Bracket\n![Travel Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-varsity-2015-travel.png)\n\n## Middle School Only Bracket\n![MS Only Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-varsity-2015-ms-only.png)",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules."
            },
            {
                "name": "8th Grade MS Varsity Saturday 2014-15 League",
                "id": 2027,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\nThe league will play a 10-game regular season with the last game on February 28. The following week there will be a single-elimination playoff to determine the champion. For playoffs, we will do 3 different divisions for parity.\n\nAll questions should be directed towards your coach.\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call one of these numbers:\n\n* Meadowbrook, Roger Carter, and North Laurel: 410-313-4452 (option 2)\n* One of the Howard County Schools: 410-313-6827\n* \n# Playoff Brackets\n\n## Division 1 Bracket\n![D1 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-varsity-2015-d1.png)\n\n## Division 2 Bracket\n![D2 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-varsity-2015-d2.png)",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules."
            },
            {
                "name": "Ballin in Fall 2015 - Ricky Knight Memorial Tournament",
                "id": 3039,
                "homeScreen": "**Use the tabs above to view the schedule, rules, standings etc**\n\n**Tournament Championship games are Sunday afternoon or evening**\n\t\t\t\t\t\n- \t**4th grade Champion: WHC Force 27 - 24 over Stealth**\n- \t**5th grade Champion:  Savage, 36 - 26 over MADE**\n- \t**6th grade Champion: WHC Force Black, 38 - 31 over MD Sharks**\n- \t**7th grade Green Champion: DMV Stags, 60 - 39 over HC Elite Green**\n- \t**7th grade Champion Blue/White: Monocacy 44-36 over Savage**\n- \t**8th grade Green Champion, Pikesville: 45 - 38 over Ravens - Swartz**\n- \t**8th grade White Champion:  Mt View 52 - 41 over Glenwood**\n",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*"
            },
            {
                "name": "Ballin in the Fall ",
                "id": 2023,
                "homeScreen": "###Select one of the tabs above for various info, such as Team Schedule, Rules, Full Tournament Schedule, Standings, Direction, etc.###\n\n<br/>**Championship participants will be calculated throughout the tournament and posted below, on this page.  A hard copy will also be posted at each site and updated throughout the day Sunday. Be sure to press the refresh button on your device to ensure you are getting the most current updates.**  \n\n###Championship Games###\n\n<br/>**3rd Grade Championship Game. Sunday, 5:30PM, MAC court 4**\n<br>1st Place  **Madison Bucs  vs**      2nd Place **Sharks Red**\n<br/>**3rd Grade Champion: Madison Bucs   Score 19  -  11**\n\n<br/>**4th Grade Championship Game.  Sunday, 5:30PM, MAC court 3**\n<br>1st Place:  **MADE Elite  vs**      2nd Place *D1SA Spartans**\n<br/>**4th Grade Champion: Winner: MADE Elite  Score 29  -  26**\n\n<br/>**5th Grade Championship Game. Sunday, 5:30PM, MAC court 2**\n<br>1st Place  **MD 3D  vs**      2nd Place **Baltimore Elite**\n<br/>**5th Grade Champion: Winner: MD 3D  Score 38  -  35**\n\n<br/>**6th Grade Championship Game.  Sunday, 5:30PM MAC court 1**\n<br>1st Place  **HC Elite - White  vs**      2nd Place **Ravens**  \n<br/>**6th Grade Champion: Winner: HC Elite - White  Score 39  -  31**\n\n<br/>**7th Grade Gold Championship Game.  Sunday, 6:30PM, MAC court 3**\n<br>1st Place  **HC Elite  vs**      2nd Place **Olney Shockers** \n<br/>**7th Grade Gold Champions: Winner: HC Elite  Score 36  -  20**\n\n<br/>**7th Grade Red - White - Blue Playoffs**\n<br/>**Sunday:  Semi Finals** 4:15PM**\n<br>Semi Final  1, Sunday, 4:15pm, ct 1:  1st Place 7th Red   **Ellicott Mills MS  vs**      1st Place White **Mt View MS** \n <br>Semi Final  2, Sunday, 4:15pm, ct 2:  1st Place 7th Blue   **Monocacy MS  vs**      2nd Place Red **Clarksville MS** \n<br>**6:30PM Championship**:   **Ellicott Mills MS  vs**      **Clarksville MS on MAC court 3** \n<br/> **7th Grade Red - White - Blue Champion:  Winner: Ellicott Mills MS  Score 39  -  35**\n\n<br/>**8th Grade Gold Championship Game.  Sunday, 6:30PM, MAC court 1**\n <br>1st Place  **HC Elite - Phillips  vs**      2nd Place **Running Raptors** \n<br/>**8th Grade Gold Champion: Winner: HC Elite - Phillips  Score 44  -  26**\n\n<br/>**8th Grade White - Championship Game.:  Sunday:  6:30PM  MAC court 2**\n<br>1st Place 8th Blue   **Howard United  vs**      1st Place 8th White **Monocacy MS** \n<br/>**8th Grade Blue - White Champion: Winner: Monocacy MS  Score 60  -  33**\n",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied\n<br/>- Overall Point Differential \n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*\n"
            },
            {
                "name": "Friday Spring 2015 13U HCMS",
                "id": 2036,
                "homeScreen": null,
                "rulesScreen": "Friday 7th Grade Harpers Choice MS league Spring 2015\r\n\r\nThe first team listed on the schedule is HOME and should wear white (light.)\r\nSecond team listed is away and wears dark jerseys.\r\n\r\n- Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball unless two 6th grade teams are playing then they can select a 28.5 ball if they both agree. \r\n\r\n* Each team must provide a team representative at the scorer’s table for their game.  One team covers the book; the other team covers the clock.  \r\n\r\nHS Federation rules except where noted.\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n- 20 minute halves.  Running Clock except last 1 minute of first half, last 2 minutes of game and time outs.  \r\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \r\n- Free Throw Bonus:\r\nWe’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \r\n1st half , NO 1-n-1 bonus at 7 fouls.  2 shot bonus will be shot at 10th foul.  \r\n2nd Half, Similar to first half, except when we get to 2 minutes and are in “stop clock” mode.  With more than 2 minutes in the second half (running clock) we will only shoot a 2 shot bonus on the 10th foul – no 1 and 1 bonus at 7 fouls.  With 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.  \r\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1.  If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.  \r\n- No pressing or half-court trapping after lead reaches 20 points.  Team gets 2 warnings.  On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court. \r\n- 2 behavior related technical fouls result in removal from current and next game.\r\n- No technical fouls for book errors.  Just correct the mistake and move on.\r\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start. \r\n\r\n- Overtime – One 2 minute OT.  Teams get one additional timeout in OT, two maximum.\r\nIf still tied after one OT, game is over.  \r\n\r\nThe League Commissioner, will settle all disputes and rule interpretations.\r\nIf Bill Nap can’t be reached, the lead official will decide.\r\n\t\t\t\t\t\t\t\tBill Nap 410-258-4189\r\n\r\n"
            },
            {
                "name": "Friday Spring 2015 13U LEMS",
                "id": 2037,
                "homeScreen": null,
                "rulesScreen": "Friday 7th Grade LEMS league Spring 2015\r\n\r\n\r\nThe first team listed on the schedule is HOME and should wear white (light.)\r\nSecond team listed is away and wears dark jerseys.\r\n\r\n- Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball unless two 6th grade teams are playing then they can select a 28.5 ball if they both agree. \r\n\r\n* Each team must provide a team representative at the scorer’s table for their game.  One team covers the book; the other team covers the clock.  \r\n\r\nHS Federation rules except where noted.\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n- 20 minute halves.  Running Clock except last 1 minute of first half, last 2 minutes of game and time outs.  \r\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \r\n- No pressing or half-court trapping after lead reaches 20 points.  Team gets 2 warnings.  On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court. \r\n- 2 behavior related technical fouls result in removal from current and next game.\r\n- No technical fouls for book errors.  Just correct the mistake and move on.\r\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start. \r\n\r\n- Overtime – One 2 minute OT.  Teams get one additional timeout in OT, two maximum.\r\nIf still tied after one OT, game is over.  \r\n\r\nThe League Commissioner, will settle all disputes and rule interpretations.\r\nIf Bill Nap can’t be reached, the lead official will decide.\r\n\t\t\t\t\t\t\t\tBill Nap 410-258-4189\r\n"
            },
            {
                "name": "HCYP 4th Grade Girls Rec 2014-2015",
                "id": 2020,
                "homeScreen": "Information about weekend game cancellations due to inclement weather will be posted at www.hcyp.org.  If games are cancelled, League Commissioners will be informed so they can contact their coaches and coaches can inform their players. \n\nHCPSS Inclement Weather Hotline: 410-313-6827 or 410-313-6666.\n\nUse the nav bar at the top to view the [schedule by team](#!teams) (as well as directions).\n\nAll games have now been scheduled. The league will play an 10 game regular season, followed by playoffs.\n\nAll questions should be directed towards your coach or to the official [HCYP organization](http://www.hcyp.org/).\n\nHave a great season!",
                "rulesScreen": "**HCYP BASKETBALL**\n\nSTANDARD LEAGUE RULES & REGULATIONS\n2014 – 2015 Winter Season\n\n~ Boys and Girls Leagues, 3rd through 12th Grades ~\n\n*Revised September 2014*\n\n1. Governing Rules: With the exception of the special HCYP rules listed below, HCYP\nRecreation Basketball generally follows the National Federation of State High School\nAssociations (NFHS) Basketball rules. NFHS rules pertaining to team jersey numbers do not\napply.\n2. Quarters and Time Outs: Games in each league shall consist of four quarters per game\neach with a 10-minute running clock that stops only on time-outs and on all whistles in the last\n(1) minute of each quarter. The clock shall also stop on all technical fouls. Each team\nreceives two (2) time-outs per game, which do not carry forward into an overtime period.\n3. Overtime: Overtimes consist of one-minute periods with the clock stopping on all whistles.\nEach team is allowed one time-out in the first overtime period. No time-outs are allowed in\nany subsequent overtime period. There is no “sudden death.”\n4. Ball Sizes: The ball size for all recreation league games and practices shall be 28.5\"\ncircumference for all boys 3rd through 6th grade leagues and for all girls leagues. The 29.5\"\nsize basketball shall be used for all boys leagues 7th grade and higher. This rule is consistent\nwith National AAU, YBOA and other organizations which include groups younger than high\nschool ages.\n5. Fouls: Players foul out on their fifth personal foul.\n6. Free-throw Awards: In order to provide more actual playing time (given that there is a\nrunning clock), non-shooting foul free-throws will only be awarded on the tenth team foul in\neach half. ALL shooting fouls shall be awarded the appropriate number of freethrows\nregardless of the number of team fouls committed. On and after the tenth team foul\nin each half, two free- throws shall be awarded to the player who is fouled (non-shooting\nfouls per NFHS regulations – see below for more details). If the player who is fouled has to\nwithdraw from playing due to injury or disqualification, then the player's substitute shall\nattempt the free-throws. If no substitute is available, then the coach or team captain may\nchoose any remaining qualifying teammate to attempt the free-throws.\na. Federation rules regarding player-control (team-control) fouls shall apply. As such, no\nfree- throws are awarded at anytime for player control or team control fouls, even if the\nteam has collected 10 or more fouls in the half.\ni. NOTE-1: Players in the 4th and 5th grade leagues may go over the free-throw line in the\nprocess of shooting their free-throw without penalty. Please see Section 13 for special\nThird Grade league adaptations. Being allowed to go over the line in any case does\nnot permit the player to “rush” to get the rebound until the ball hits the rim. This is\nconsistent with NFHS regulations.\nii. NOTE-2: If a time-out is issued before or during the shooting of free-throws, and if\nthere is more than one minute left in the quarter, the time out is over and the clock\nshall resume counting down when the referee hands the ball to the free-throw shooter\nor the ball is placed on the foul line by the official. At that point, the free-throw shooter\nwill have 10 seconds in which to shoot the free-throw.\nb. Technical Fouls: HCYP absolutely discourages poor sportsmanship or any other\nactivity that warrants a technical foul. As such, one point shall be awarded in addition to\nthe award of one free-throw for all technical fouls called. The automatic point shall be\nawarded to the shooter. Once the free-throw has been attempted, possession shall\nbe awarded to the offended team. The clock shall stop for the duration of the assessment\nof the penalty, and -- even if more than one minute is left in the period -- shall\nresume when the ball is in- bounded.\n7. Jump Balls: Jump balls shall only occur on the opening tip and the beginning of each\novertime.\n8. Three-seconds lane violations will be called. These violations will be called per NFHS\nRules. There is some flexibility given to the third grade leagues (see #13).\n9. Possession (Directional) Arrow: Per the National Federation of State High School\nAssociations basketball rules, the possession arrow shall point in the direction of the team's\nbasket which has the next possession.\n10. Defenses: HCYP rules govern defenses throughout all age groups to ensure all teams and\nplayers can gain maximum benefit in all aspects of the game. These rules primarily cover\nbackcourt defense restrictions and zone defense restrictions at the various age levels.\na. Backcourt Defense (Press): Backcourt, zone and trapping defenses are not permitted at\nthe third grade level. At the other ages, no backcourt defenses are allowed if the\ndefending team is leading as follows:\nGRADE LEAD\n3 No backcourt or trapping defenses allowed at any time.\n4 6 points.\n5-8 10 points. Must defend behind the top-of-the arc extended if the lead is 20 points.\n9-12 20 points, must defend behind the top-of-the arc extended.\nNote: As indicated above for 5th-12th grade leagues, if the lead is 20 points or more, the\nleading team must play defense behind the top of the arc extended, meaning\nbehind the imaginary straight line extending across the court from one sideline to\nthe opposite sideline and passing through the top of the arc. In addition, in all\ncases where no pressing or backcourt defense is permitted, the team that is ahead\nmust allow the team with the ball to cross the half-court line when they are bringing\nthe ball up court.\nb. Zone Defenses for Boys’ and Girls’ 4th – 8th grade Leagues: In addition to the no\nbackcourt defense rule stated in #10-a, zone defenses are not allowed in the first two\nquarters of any game for all boys and girls in the 4th – 8th grade leagues. Each defensive\nplayer must guard a particular offensive player as play moves on the court. Players may\n“switch” on defense (as in during an offensive pick). Defensive players may play away\nfrom the offensive players being guarded if the offensive players take themselves out of\nplay (i.e., if the player(s) spread to the four corners of the front court), but they must still\nstay within reasonable proximity of the players being guarded. When the offensive player\nwith the ball starts to enter into the lane or appears to imminently enter the lane, all\ndefenders may defend the lane against the score.\nNote 1; Double teaming is allowed as long as the defending team is not set in a\nzone defensive position.\nNote 2; Officials have full discretion to determine whether proper defense is being\nused. Coaches shall not argue the call or no-call of the official and may be charged\nwith a technical foul if the official’s ruling is argued. It is acceptable for a coach to\nbring a possible violation to the official’s attention if done so in an appropriate\nmanner.\n11. Playing Time: (Except for the High School Girls and Boys leagues, the following rules\nshall apply to all officiated games. See #11-c, below.) Player substitutions will only be\nmade at the beginning of each quarter, except as noted in rule number 11-a, below.\nEach player must play a minimum of two full quarters. Further, the bench must be cleared\nat the end of each quarter (including overtimes); no player may sit out 2 quarters in\na row. All players who arrive at each game prior to the start of the game must be\nallowed to play at least half of the game. (Note: In overtime, coaches may select any\nfive players to start the first overtime period, regardless of who played in the fourth quarter;\nhowever, the bench must be cleared for each subsequent overtime period.) Player\nparticipation requirements are as follows:\n(Note: No team may have ten players)\n9 2 play 3 quarters, 7 play 2 quarters\n8 4 play 3 quarters, 4 play two quarters\n7 6 play 3 quarters, 1 play 2 quarters\n6 2 play 4 quarters, 4 play 3 quarters\n5 5 play 4 quarters\na. Substitutions: Each player who arrives in time for the start of the game must be\ngiven the opportunity to play at least half of that game. If a player is substituted in\nany part of a period due to injury or other health reasons, both the substitute and\nthe player generally are considered to have played that period, and it is counted as\none of the periods played (even if it is ten seconds). The substitute cannot play\nmore than his/her scheduled time and must come from the next rotation of players.\nWhen the injured player is ready to return in that period, he/she must re-enter the\ngame during the next dead ball. The substitute is now considered to have\nplayed one of his/her periods, and cannot substitute again unless it is for the same\nplayer in the same period.\nThe intent of this rule is to ensure that teams do not try to get an advantage by\nplaying any given player more than their time share. With the permission of\nthe acting game commissioner or league commissioner, the substitute may resume\nhis/her original rotation, particularly if the substitute played only a short period.\nThe acting game commissioner or commissioner shall provide the final arbitration\non this rule should there be any dispute between the coaches. The final\narbitration may allow for the regular rotations to continue if it is determined that\nthe substituting team does not gain an unfair advantage by the substitution.\nA coach may avoid any question about playing time in these situations by not\nsubstituting for the injured player and play with four players instead of five for the\nduration of the quarter or until the injured player returns to play in that quarter.\nWillful violations of any player-time rule shall result in a forfeiture of the game. If a\ncoach sees that the player-time rule is not being followed, he/she must ask the\nofficial to stop the game to make the adjustment, and the acting game\ncommissioner should be involved. Should the adjustment not be made after being\nbrought to the attention of the commissioner, officials and opposing coach, the\noffending team shall receive a forfeit should it be established that the player-time\nrule was indeed violated.\nb. Late Arrival Rule: If a player arrives at a game after the first quarter has begun,\nthen he/she is only required to play one quarter. If a player arrives after the\nbeginning of the second half, then he/she is not required to play at all. Coaches\nmust be consistent in enforcing this rule.\nc. High School Boys and Girls: The High School boys and girls league teams\nmay use free substitutions instead of substituting per quarter. Still, coaches must\nassign fair and equitable playing time for all players in each game. This\nprovision of the rules will be monitored by the league commissioner and all\ncoaches in the league.\n12. Team Equipment: Players must wear HCYP issued jerseys or acceptable substitute, and\nmust wear basketball appropriate shorts (sweat pants may be accepted), shoes and\nundergarments. Players may not wear any items that will conflict with playing the game of\nbasketball, cause injury or cause distraction. This includes, but is not limited to,\nearrings (see earrings section below), hard casts or hard bandages, necklaces, hats,\nhair beads, belts with buckles, non-basketball type/running shoes (i.e., street shoes, work\nshoes, other hard shoes), shoes with flashing lights, etc.\na. The game officials, in conference with the league or acting game commissioner, shall\nmake final judgments on specific items not covered in this paragraph. The senior\nbasketball official shall have overriding authority on these decisions within the\nparameters of HCYP’s league rules as stated herein. Secured, unbreakable or shatterproof\nsports eyeglasses are permitted, but the player/parents must take full\nresponsibility for effectively securing the eyeglasses and for injuries resulting to the\nplayer or other players as a direct result of the player wearing the eyeglasses.\nb. NOTE on Earrings: Earrings may be worn if sufficiently taped to avoid any\npossibility of the earring(s) injuring the player or another player. Only earrings which\nare absolutely tight to the ear (i.e., studs or small rings that actually hug the ear) are\nacceptable but must be sufficiently taped. Players wearing taped earrings must take\nfull responsibility for injury to themselves or others as a direct result of wearing\nthem. All special cases involving religious or related customs and not covered by this\nrule must be reviewed and ruled upon by the Basketball Committee.\n13. Third Grade League Transition Rules: The 3rd Grade leagues introduce players to the\nrealm of playing officiated basketball. HCYP's goal is to ensure that every player being\nintroduced to this level of basketball has every opportunity to learn the sport and become\nacquainted with the game under totally fun and healthy conditions that promote learning\nand self-esteem. As such, special modifications are put into place for the boys and girls\nthird-grade leagues.\na. Basket Heights: The basket height for the 3rd grade leagues shall be 9 feet.\nb. Free-throw position: Players shall be allowed to shoot from 18” in front of the\nstandard free-throw line and may go over the line in the process of shooting. At no\npoint may the free-throw shooter be allowed to attempt the rebound until the ball\nhits the rim. This is in accordance with NFHS regulations.\nc. Three-seconds violation: The three-seconds violation shall be called with certain\nflexibilities. Officials may instruct players not to stay in the lane but call the\nviolation if they continue to do it. Players on offense may not \"camp out\" in the\nlane at any time, but players moving through the lane may be given some\nlatitude, especially early in the season.\nd. Two-week Pre-season: The first two weeks of the regular season shall be played\nas pre-season games. No scoring, standings nor other records shall be kept during\nthis two-week pre-season period. Scores and records shall be kept starting with\nthe third game of the regular season and leading to the playoffs.\ne. Defenses: In addition to the no backcourt defense rule, no zone defenses shall be\nused. There can be no double teaming outside of the lane. Help defense is\nallowed at all times, especially in the lane, for the entire season; however, no\nplayer(s) may chase the ball on defense. This “posse” defense is not allowed.\nPlayers may “switch” on defense (as in during an offensive pick), but at no point\ncan two players guard the same player. Defensive players may play off of their\nplayer if their player takes themselves out of play (i.e., if the player(s) spread to\nthe four corners of the front court), but they must still stay within reasonable\nproximity of their player. Anytime the ball begins to enter the lane, this double team\nrule does not apply. Officials have full discretion to determine whether proper\ndefense is being used.\nf. Ball Inbounding: When inbounding the ball, the player with possession of the ball\nmust inbound the ball from behind the boundary lines of the court (per rule, they\nmay step on the line, but not over). Officials may allow players to step over the line\nin cases where there is very tight space at the point of the inbound. In the\nbackcourt, if a player steps over the line while inbounding the ball, the official shall\ncall the ball back and allow the player to re-inbound the ball from behind the line. If\nthe player steps over the line at the second inbound attempt, then the ball is\nawarded to the opposing team.\ng. Playoffs and Championships: The playoffs shall be fully-scored and ranked with\nthe championship determined by a championship game at the conclusion of the\nplayoffs.\nh. Officiating: Games shall be officiated according to all other rules of the game as\nstated herein with the understanding that the players be allowed to play and\nlearn the game without consistently stopping the game for whistles. Officials\nshall control the game and their judgment is final. The officials shall ensure that\nthe integrity of every game is maintained while allowing maximum game play.\nFouls shall be kept in check. Officials’ will always consider whether any action\ncreates an unfair advantage for any team or player.\ni. Violations: Violations shall be called with more lenience at the beginning of the\nseason and progressively tighter as the season unfolds.\nii. Playoffs: In the playoffs, all violations are to be called as in any older league.\n14. Special Transition Note on Rim Height for 4th Grade Girls and Boys Leagues: The rim\nheight shall be adjusted to 9.5 feet for all 4th Grade boys and girls age groups in gyms where\nthe rims can be adjusted to that height. Otherwise, the height shall be 10 feet.\n15. Rule Adaptations: There shall be no adaptations to the HCYP Basketball Rules for any\nrecreation league. Under no circumstances may a league, coach or coaches, league\ncommissioner or players change or adapt the rules for their league or any games. The officials\nshall oversee all games according to the approved current HCYP Basketball Standard League\nRules & Regulations. Rules may only be administered and revised by the HCYP Basketball\nCommittee.\nLeague Regulations and Code of Ethics\n1. The League Commissioner shall make sure a copy of these HCYP Rules and Regulations is\navailable at the score table for each and every game. The League Commissioner is\nresponsible for effectively organizing and managing his/her assigned league, ensuring that the\nrules are followed and troubleshooting all issues that may arise, in accordance with HCYP\npolicy. He/she is responsible for the appointment of coaches and running evaluations and the\ndraft. Above all, the League Commissioner is responsible for upholding and reflecting the\npolicies and values of HCYP Basketball.\n2. Coaches are responsible for:\na. Teaching the fundamentals of basketball at the age-appropriate levels.\nb. Teaching and upholding the rules of HCYP basketball.\nc. Making their best efforts to provide each player on his/her team reasonably equal\nplaying time over the course of the regular season.\nd. The conduct and behavior of their players, parents, assistant coaches, and\nthemselves.\ne. Conducting appropriate practices and responsibly coaching the games.\nf. Communicating all game and practice schedules, cancellations, etc., with the players and\ntheir parents in a timely manner.\ng. Serving as Acting Game Commissioner for at least one game day during the season, as\nassigned by the league commissioner.\n3. Acting Game Commissioners are responsible for:\na. Monitoring games and resolving any disputes that may arise.\nb. Ensuring games start on time, are kept moving, and that delays avoided.\nc. Ensuring each coach provides a scorekeeper and a timekeeper.\nd. Instructing both timekeeper and scorekeeper how to operate the clock and keep score.\n4. The referees -- not the coaches -- are responsible for controlling the games. Coaches may\nnot come onto the game floor during game play/activity to talk to the referees or instruct a\nplayer. Doing so shall result in a technical foul. Coaches should seek out the Commissioner or\nActing Game Commissioner to address officiating concerns. The times a coach may come\nonto the playing area are during time outs, between quarters and at half time, during warm\nups, when an official calls them onto the court for any reason (i.e., to deal with an injured\nplayer), etc., but never during game play. Coaches may not approach the opposing team’s\nbench during game play.\n5. Both teams during a game must take their place on the same side of the gym as the score\nclock and scorekeeper. Parents and other spectators may not sit with the teams. Only one\nassistant coach may join the coach on the bench during a game. Neither the scorekeeper nor\nthe timekeeper may conduct themselves as a coach for either team.\n6. There will be zero tolerance for fighting, swearing, blatant rough play (i.e., pushing or\nslapping another player, deliberately elbowing another player in the face or head, etc.) or\nother verbal or physical abuse by players, coaches, parents or other spectators. Doing so\nwill result in the offender’s or offenders’ ejection from the game and premises, and technical\nfouls shall be assessed. Ejection will result in the offender’s or offenders’ suspension for the\nnext scheduled game on the first ejection, the next six scheduled games on the second\nejection, and from the league on the third ejection. Coaches must report all ejections to the\nLeague’s Commissioner within 12 hours. The League Commissioner must report a coach’s\nejection to the Recreation Basketball Commissioner and the Director of Basketball within 12\nhours after being notified. Some ejections may result in expulsion from the league for the\nentire remainder of the season or other banishment, particularly in the case of threats of\nharm to any person, or other harsh behavior. Any suspension or expulsion\nincludes all practices as well as games during the suspension or expulsion period.\nDuring these periods, the offender may not be inside the gym or\nschool/gym building premises during games or practices except to remain inside a\ntransportation vehicle for drop-off and pick up.\n7. Technical Fouls, Intentional Fouls, Ejections and League Protocol and Procedures:\nTechnical fouls may be assessed for various reasons. Some are automatic and others are per\nthe official’s best discretion. ONLY an official may assess a technical foul on a player or bench\npersonnel.\na. Automatic technical fouls: Automatic technical fouls are assessed for, but not limited to:\ni.) Use of profanity, vulgarity and any immoral gestures verbal or physical (i.e., obscene\ngestures); ii.) Any intentional foul called by the official, whether it is flagrant or not flagrant;\niii.) Purposefully distracting a free-throw shooter during a free-throw attempt; iv.)\nPurposeful delay of game by a coach or player, such as refusal to give up the ball for play,\nrefusing to have the appropriate number of players on the court to play the game or\nslapping the ball away from a player inbounding the ball by reaching over the out of bounds\nline to hit the ball (it is okay to make contact with the ball if the player inbounding the ball\nholds the ball over the line on the side of the playing court), consistently and willfully\nviolating the no-backcourt defense rule after a delay of game warning has been issued for\nthe same, or continuing to play after the ball has been blown dead; v.) Purposefully\nslamming the ball down on the court or throwing the ball away at any time during play,\nregardless of reason, in anger or in celebration; vi.) Improper pre-game activities starting\n15 minutes before tip-off, and during any game dead-ball situation. Such improper\nactivities include dunking the ball, getting into arguments or directing improper language or\ngestures to any player, coach, official or spectator and trying to coerce an official to call the\ngame against any of the established rules of the game or the established HCYP Rules and\nRegulations.\nb. Assessed Technical Fouls: Technical fouls may also be assessed by any official in his\nor her discretion for the following, but not limited to: 1.) A coach’s continuous arguing or\ncomplaining about any situation during the game including how the game is being played\nby his/her team or their opponents; ii) Excessive arguing over a call made by an official,\niii.) Disrespectful language or gesture (even if not profane or vulgar) directed to any player,\nbench personnel, official or spectator; iii) A player’s continuous complaining or arguing\nabout on-court play, officiating, or any circumstance not handled with proper decorum\n(such as continuous complaining and arguing about the condition of the basketball, for\ninstance); iv.) A player’s attempt or veiled attempt to verbally or physically distract, startle\nor intimidate another player, spectator, coach or official during game play; v.) Continuous\ncheering, coaching and other related behavior by the clock keeper or scorebook keeper\nassigned by a team during the course of the game (an indirect technical foul is assessed to\nthe team the volunteer represents); vi.) Any improper contact.\nSpecial Note regarding technical fouls for backcourt defense and inbound defense\nviolations: Since HCYP’s backcourt defense rule is not a standard rule of the game but is\na standard HCYP Rule, the official has broad discretion in how technical fouls will be\nassessed and any subsequent action for a team that plays backcourt defense when that\nteam is not allowed to play backcourt defense. Even after an initial delay of game is called\nfor backcourt defense, the team’s subsequent incursion of illegal backcourt defense shall\nnot necessarily compel the official to call a technical foul against the team unless the\nofficial deems that the team has willfully or intentionally played backcourt defense in an\nunsporting manner with unsporting intent or unacceptable disregard for the backcourt\ndefense rule. Excessive violation of the backcourt defense rule for any league shall result\nin the issuance of a technical foul only after the team has been warned by the official.\nEven if a technical foul is called for illegal backcourt defense, the coach need not be\nassessed a direct or an indirect technical foul or ejected unless the coach is deemed to be\ninstigating or encouraging such illegal backcourt defense or is not trying to get his/her team\nto stop playing illegal backcourt defense. It must be noted that often times, playing\nimmediate defense in the backcourt is an instinct and need not be penalized if it\ninadvertently occurs other than to ensure the team in possession in their backcourt retains\npossession. Similarly, in the younger leagues, technical fouls or delay of game warnings\nfor a defender reaching over the line to guard an inbound pass need not draw an automatic\ntechnical foul call but can simply be given an explanation as to why they cannot do that. If\nthe violation occurs again, officials can reinforce the rule with a delay of game warning and\ntechnical foul as applied by rule. IN ALL CASES, THE DECISION TO ASSESS A\nTECHNICAL FOUL IS AT THE FULL DISCRETION OF THE OFFICIAL AND CANNOT BE\nINSITGATED, ALTERED OR OTHERWISE INFLUENCED BY ANY PLAYER, COACH,\nSPECTATOR OR OTHER LEAGUE PERSONNEL.\nc. Intentional and Flagrant Fouls: Intentional personal fouls are called on any player who\nintentionally fouls another player regardless of whether the fouled player was injured or\nwas at risk of being injured. Intentional fouls are treated as technical fouls. Intentional\nfouls that are deemed excessive, unnecessary and/or without regard for safety are flagrant\nfouls. While intentional fouls count as a technical foul (two of which result in ejection of the\nplayer), flagrant fouls result in an automatic ejection.\nd. Technical Foul Assessments: Except in an incidence that results in an automatic\nejection, a player or any coach shall be ejected from the game when he or she receives\ntwo direct technical fouls. The head coach, who is responsible for the conduct of his/her\nteam and all bench personnel and his/her spectators, is also assessed an indirect technical\nfoul for each technical foul issued to an assistant coach, clock or scorebook keeper who\nrepresents his/her team, and any improper pre-game or dead ball activity committed by his\nteam. The head coach shall be ejected from the game should he/she receive: 1) two\ndirect technical fouls, 2) one direct technical foul and two indirect technical fouls, or 3)\nthree indirect technical fouls.\ne. Ejection Procedure and Protocol: Once a player, coach or any other personnel is\nejected from the game, that person must immediately vacate the gym and building and\nmay not return for any reason after the game or while HCYP Basketball activities are taking\nplace. Any player or coach (or spectator who may be ejected or asked to leave by the\ncoach, commissioner or game day commissioner) is automatically suspended from HCYP\nBasketball for a minimum of one week, including the next game, and may not attend any\nHCYP Basketball game or practice including the next game played by his/her team. The\nterms of the one week suspension may only be altered (including dismissal) by the HCYP\nBasketball committee with good cause; however, the HCYP Basketball committee will not\noverturn suspensions for fighting, vulgarity or profanity or other threatening behavior but\nmay extend the length of suspension or assess expulsion from HCYP Basketball for the\nremainder of the season or longer as deemed fair and appropriate in consideration of the\nseverity of the action(s) that resulted in the ejection. Any coach or player who refuses to\nleave the game/gym premises or returns to the game/gym premises to participate or\ninvolve himself or herself in post-game activities (i.e., team meeting, interact with any\nteam/game/school personnel, player or official), shall be automatically suspended for a\nminimum of two weeks and his/her team’s next two games with an additional assessment\nadded on by the HCYP Basketball committee as the Committee deems is appropriate. An\nejected player or coach may wait inside the waiting area of the building where the game is\nbeing played if waiting for a ride in the case of inclement weather. Players may remain on\nthe bench under the supervision of the coach after ejection if the player does not have\ntransportation with a parent or legal guardian or caretaker. If the payer’s parent, legal\nguardian or caretaker is in attendance and is not a coach for the current game, then the\nplayer must leave the premises with that person.\n8. Players and coaches will line up to shake hands at the end of each game. Refusal to do so\nand in a sportsmanlike manner may result in league sanctions to the team or individual(s).\n9. Special cases may arise from time to time where special disciplinary actions may be\nwarranted and shall be administered accordingly. Such actions may include, but are not\nlimited to, a coach’s refusal to abide by the rules, “off-the-court” behavior, or any other\nactions that inhibit, preclude or violate the intent, objectives and goals of the rules and policies\nof HCYP Basketball. Likewise, if warranted, a ruling may be overturned by the Director of\nBasketball or the Basketball Committee, as warranted, after review of the circumstances.\nOnce the Basketball Committee issues a ruling, it shall be final, except by subsequent action\nof the Basketball Committee itself.\n10. Any unsanctioned practices are not permitted. That means, any practices outside of the\nnormal practice schedule (or make up schedule) as organized and sanctioned by HCYP\nBasketball from its allotment of gym permits may not be held. Doing so results in the forfeiture\nof the following game. If players independently want to get together for a shoot-around, that is\ntheir business and prerogative as long as a team or parent coach does not arrange it. A coach\nshould not be involved in or in attendance for any such extra-curricular activities.\n11. A copy of these HCYP Basketball rules and regulations is posted on the HCYP website at\nwww.hcyp.org and may be downloaded for printing.\n\nLeague Notes:\n• Co-Captains: Each team may assign co-captains for each game, alternating different cocaptains\nfor each game. The co-captains and coaches should meet at center court with the\nreferees prior to each game.\n• Score and Clock Keepers: Each team must provide a clock keeper and a\nscorebook keeper for their respective games. The scorebook keeper must keep all\npertinent and accurate data in the scorebook including the running score (except in\nthe 8-year-old leagues’ pre-season period), score per player/quarter, team fouls, player\nfouls, technical fouls, quarters played per player, player name and number, and the total\nscore.\n• Practice Scrimmages: It is okay, and recommended, that teams sharing a court at\nthe same or adjacent practice times arrange to scrimmage each other as coaches feel may\nbe helpful. The scrimmages may only take place during the teams’ allotted practice times.\n• Game Snacks: Snacks may be provided for players at the end of each game, but the\ncoaches, parents and players are responsible for making sure doing so does not result in\nlittering, spills, or other mess in the gym or school building or on the school grounds. Some\nschools have banned snacks in their gyms as a result of poor oversight of this responsibility.\nIn these cases, snacks may be provided but only outside of the gym and school building.\n• Schedule Swapping: Coaches may agree to change their game/practice times with each\nother, but only after approval of the league commissioner and the coaches of all teams\ninvolved.\n• Cancellations: Practices will be cancelled on any day when the schools are closed for\nholiday, inclement weather, school events (exceptions) or other related reasons. Practices\nmay be held as usual on days when classes are not held but schools are open (i.e.,\nteacher/parent conference days, teacher work days, etc.), unless non-teaching personnel do\nnot report or otherwise notified.\n* * * * * * * * * * * *\nHCYP Basketball Rules Summary\n(See the full Rules and Regulations manual for full details.)\n\n1. HCYP Basketball generally follows the National Federation of State High School\nAssociations (NFHS) Basketball Rules, modified by the HCYP rules.\n\n2. Quarters: Four, 10-minute quarters per game with a running clock that stops only on\ntime-outs and on all whistles in the last (1) minute of each quarter\n\n3. Time-outs: Two (2) time-outs per team/game. One in the first overtime only.\n\n4. Overtimes: One-minute periods with a stop clock. One time out per team in the first OT\nperiod, and no time-outs in subsequent periods. There is no sudden death.\n\n5. Ball size: The 28.5\" circumference ball is used for all age and gender groups except for\nboys’ leagues 7th grade and higher, which use the 29.5\" circumference balls.\n\n6. Fouls: Players foul out on the fifth foul.\n\n7. Free-throws: Two free-throws are awarded on and after the tenth team foul in each half.\nNo one-and-one free-throws are awarded. ALL shooting fouls shall be awarded the\nappropriate number of free-throws when the fouls occur. No free-throws shall be awarded\nfor player control or team control fouls at any time.\n\n8. Technical Fouls: One point, plus one free-throw, and possession of the ball.\n\n9. Jump balls shall occur at the start of the game and the start of each overtime period.\n\n10. Defenses: All defenses are allowed except: a.) No backcourt, trapping or zone defenses in\nthe 3rd Grade leagues; b.) No backcourt or half-court trapping defenses in older leagues if\nthe team is up by 6 points (4th grade leagues), 10 points (5th-8th grade leagues), or 20 points\n(high school leagues). For grades 5 through high school, if the lead is 20 points or more,\ndefense must be limited to the area behind the imaginary straight line from sideline to the\nopposite sideline and passing through the top of the arc. C.) No zone defenses for boys and\ngirls 4th – 8th grade leagues in the first two quarters. Double teams are allowed if the defense\nis not in a committed zone defense.\n\n11. Substitutions may only be made at the beginning of each quarter, unless a player must\nleave a game for injury, illness or other compelling reason. No player may sit out two\nstraight quarters, and no player may play more than one quarter more than another player on\nthe same team. Note: High School Boys and Girls may substitute freely.\n\n12. Team Equipment: Players must wear appropriate apparel for the game of basketball.\nOnly earrings that are tight to the ear -- studs or very tight loops -- may be taped securely to\npermit the respective player to play. Officials have sole control on this.\n\n13. Third Grade League Exceptions: The 3rd Grade leagues shall play a two-week\npreseason where scores and records are not kept. Zone defenses are never allowed.\nRegular scoring shall take place after the two-week pre-season and “posse” defenses (one or\nmore players chasing whoever has the ball) shall not be allowed at any time. Rim height is 9’.\n\n14. Fourth Grade Rim Height Exception: The rim height shall be set at 9.5 feet for all 4th Grade\nboys and girls leagues in gyms where the rims can be adjusted to that height.\n\n15. Zero Tolerance: There is zero tolerance on fighting, use of foul language, or other\nabusive behavior. Any player, coach or fan who violates this policy shall be suspended or\nexpelled from the HCYP Basketball Program without warning."
            },
            {
                "name": "Laker Challenge 2014",
                "id": 2019,
                "homeScreen": "###Select one of the tabs above for various info, such as Team Schedule, Rules, Full Tournament Schedule, Standings, Direction, etc.###\n\n<br/>**Championship participants will be calculated throughout the tournament and posted below, on this page.  A hard copy will also be posted at each site and updated throughout the day Sunday. Be sure to press the refresh button on your device to ensure you are getting the most current updates.**  \n\n###Championship Games###\n\n<br/>**5th Grade Championship Game. Sunday, 4PM, court 1**\n<br>1st Place  **Team TBD  vs**      2nd Place **Team TBD**\n<br/> **5th Grade Champions:   Winner  -  Score **\n\n<br/>**6th Grade Championship Game.  Sunday, 4PM court 2**\n<br>1st Place:  **Elite Coalition  vs**      2nd Place **HC Elite - 6th**\n<br/>**6th Grade Champions: Elite Coaclition:  48  -  32**\n\n<br/>**6th-7th Grade Championship Game.  Sunday, 3PM, court 1**\n<br>1st Place   **Ravens 6th  vs**      2nd Place **HC Elite - 6th** \n<br/> **6th-7th Grade Champions:  Ravens 6th  -  54 - 46**\n\n<br/>**8th Grade White Championship Game.  Sunday, 3PM court 3**\n<br>1st Place   **HC Elite 7th  vs**      2nd Place **Ravens - 8th Etchison** \n<br/> **8th Grade Champions:  Ravens 8th - Etchison** \n\n<br/>**8th Grade Red Playoffs.:  Sunday:  Semi Finals 1PM and Championship at 3PM**\n<br>Semi Final  1, Sunday, 12pm, ct 2:  1st Place   **Team TBD  vs**      4th Place **Team TBD** \n<br>Semi Final  2, Sunday, 12pm, ct 3:  2nd Place   **Team TBD  vs**      3rd Place **Team TBD** \n<br>2pm:   **MD 3D  vs**      Winner Semi 2 **HC Elite 8th - PHillips** \n<br/> **8th Grade Red Champions:  HC Elite 8th - Phillips** \n\n\n",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half.   \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied\n<br/>- Overall Point Differential \n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*\n"
            },
            {
                "name": "March Madness 2015 Tournament",
                "id": 2034,
                "homeScreen": "**Championship Games:**\n\t\t\t\t\t\n- **6:30pm MAC ct 1: 13U Champions -  HC Elite 48 vs S MD Heat 37**\n- **6:30pm MAC ct 2: 11U Champions - Team Ultimate 59 - WDBA 51**\n- **6:30pm MAC ct 3: 12U Champions - VA Hurricanes 48 HC Elite Green 38**\n- **6:30pm MAC ct 4: 9U  Champions - Madison 22 - Sharks 15**\n- **7:30pm MAC ct 1: 17U Champions HC Elite White 68 Lake Shore 50**\n- **7:30pm MAC ct 2: 16U HC Elite 10th 54 HC Elite 9th 53**\n- **7:30pm MAC ct 3: 14U Champions - Columbia Ravens 47 HC Elite 41**\n- **7:30pm MAC ct 4: 15U Champions - Team Dedication 35  - Ravens 31**\n\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*"
            },
            {
                "name": "Metro Classic 2015 Tournament",
                "id": 2040,
                "homeScreen": "**Use the tabs above to view the schedule, rules, standings etc**\n\n**Tournament Champions**\n\t\t\t\t\t\n- \t**9U Champions WVEP Warriors over HC Elite**\n- \t**10U Champions Randalstown Running Rebels over Sharks**\n- \t**12U Champions:  HC Elite White over BMore’s Finest**\n- \t**13U Champions:  HC Elite over Ravens**\n- \t**14U Champions: Ravens – Paugh over HC Elite - Phillips**\n- \t**15U Champions: Crusader Nation over MD 3D – Gielin**\n- \t**16U Champions:  Crusader Nation vs HC Elite - Tringali**\n- \t**17U Champions:  HC Elite over Crusader Nation 57-54**\n\n\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*"
            },
            {
                "name": "Spring Fling 2015 Tournament",
                "id": 2039,
                "homeScreen": "**Use the tabs above to view the schedule, rules, standings etc**\n\n**Sunday Championship Games: Championship Teams will be listed here and posted on site when determined**\n\t\t\t\t\t\n- **3pm NLCC 5 and NLCC 6:  9U Semis - (NLCC ct 5: Balt Supreme vs Perry Hall) and (NLCC ct 6: Ballerville vs HC Elite)**\n- **5pm NLCC 5: 9U  Champions - HC Elite  36 - 32 over Balt Supreme**\n- **6:15pm MAC ct 1: 15U Champions - Severn Elite 43-30 over Team Dedication**\n- **6:15pm MAC ct 2: 14U Black Div Champions - Ravens Chamblee 51-46 over Hoopmaster - BC**\n- **6:15pm MAC ct 3: 14U White-Green Champions -  DC Premier 44-30 over HC Elite - Hollwedel**\n- **6:15pm MAC ct 4: 11U Champions - MD Playmakers 50-42 over MADE Basketball**\n- **7:15pm MAC ct 1: 17U Championship not played**\n- **7:15pm MAC ct 2: 16U Champions - Advanced Hoops (PA) 56 - 42 over HC Elite - Tringali**\n- **7:15pm MAC ct 3: 12U Champions - MD Playmaker Red 48 -32 over MD Playmaker Black**\n- **7:15pm MAC ct 4: 13U Champios All City 34 - 30 over Carroll B-ball**\n\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*"
            },
            {
                "name": "Summer Showdown 2014",
                "id": 2011,
                "homeScreen": "**Select one of the tabs above to obtain various information about the tournament, in general, or your specific team, such as rules, the full tournament schedule, you team's schedule, direction, etc.** \n\n<br/>**Championship participants will be calculated throughout the tournament and posted below, on this page.  A hard copy will also be posted at each site and updated throughout the day Sunday. Be sure to press the refresh button on your device to ensure you are getting the most current updates.**  \n\n##Summer Showdown Tournament Sunday  Championship Games##\n\n###5th Grade Championship Game moved to 5:15pm###\n\n<br/>**5th Grade Championship Game. 5:15pm, MAC court 3**\n<br>1st Place  **HC Elite  vs**      2nd Place **Winchester Rising Stars**\n<br/> **5th Grade Champions:   Winner  -  Score **\n\n<br/>**6th Grade Championship Game.  4:15pm, MAC court 3**\n<br>1st Place: Green Division **CBSA Hoyas  vs**  1st Place White Division: **HC Elite - Michelotti**\n<br/>**6th Grade Champions: Winner  -  Score**\n\n<br/>**7th Grade Championship Game.  4:15pm, MAC court 2**\n<br>1st Place   **MADE Elite  vs**  2nd Place:  **HC Elite - Phillips** \n<br/> **7th Grade Champions:  Winner  -  Score**\n\n<br/>**8th Grade Championship Game. 5:15pm, MAC court 4.**\n<br>1st Place  **HC Elite - Eudell  vs**  2nd Place  **Peake Terps**\n<br/> **8th Grade Champions:  Winner  -  Score**\n\n<br/>**9th Grade Championship Game. 4:15pm, MAC court 4**\n<br>1st Place  **HC Elite - Thai  vs**  2nd Place: **Unfinished Business**\n<br/>**9th Grade Green/White Champions  :  Winner  -  Score**\n\n<br/>**10th Grade Championship Game. 4:15pm MAC court 1**\n<br>1st Place: **HC Elite - Stefan  vs**  2nd Place: **HC Elite - Clark**\n<br/>**10th Grade Champions : Winner  -  Score**\n\n<br/>**11th Grade Championship Game.  5:15pm MAC court 1.**\n<br>1st Place: **HC Elite - DNap  vs**  2nd Place S River Shooters**\n<br/> **11th Grade Champions:   HC Elite DNap  -  51 - 39**\n\n",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\nThe following will be used to determine top two teams for the Championship game:\n- Overall Record (Wins vs. Losses)\n-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n-Record vs Teams tied. \n- Point Differential vs Teams tied\n- Overall Point Differential \n- Coin Flip\n*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*\n"
            },
            {
                "name": "Summer Showdown 2015 Tournament",
                "id": 3037,
                "homeScreen": "**Use the tabs above to view the Full Schedule, Team Schedule, Rules, standings etc**\n\n**Once it is determined, the Teams who make it to the Championship Games will be listed below**\n\t\t\t\t\t\n- \t**11U Champions:  Sharks 44 - 27 over WV Lights Outk**\n- \t**12U Champions:  HC Elite 60-29 over Team Attack**\n- \t**13U Champions:  NOVA 94 Feet Orange  38 - 29 over Central MD Shockers**\n- \t**14U Champions:  Severn Elite 56 - 27 over HC Elite - Michelotti**\n-\t**15U Champions:  Fairfax Stars 48 - 43 over Carroll Basketball Club** \t\n-\t**16U Champions:  Millersville Blue Devils 57-44 over Loudon Xtreme**\n-\t**17U Champions:  HC Elite 64 - 49 over Hoop Guru**\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*"
            },
            {
                "name": "Spring Fling Tournament 2014",
                "id": 2009,
                "homeScreen": "* 5th Grade Championship - 7:30m MAC 3\n* 6th Grade Championship - 6:30pm MAC 4\n* 7th Grade White Championship - 7:30pm MAC 4\n* 7th Grade Green Championship - 7:30pm MAC 2\n* 8th Grade Championship - 7:30pm MAC 1\n* 9th Grade Championship - 8:30pm MAC 4\n* 10th Grade Championship - 8:30pm MAC 1\n* 11th Grade Championship - 8:30pm MAC 3",
                "rulesScreen": null
            }
        ];
        var leagueData = {
            "league": {
                "name": "Spring Fling Tournament 2014",
                "id": 2009,
                "homeScreen": "* 5th Grade Championship - 7:30m MAC 3\n* 6th Grade Championship - 6:30pm MAC 4\n* 7th Grade White Championship - 7:30pm MAC 4\n* 7th Grade Green Championship - 7:30pm MAC 2\n* 8th Grade Championship - 7:30pm MAC 1\n* 9th Grade Championship - 8:30pm MAC 4\n* 10th Grade Championship - 8:30pm MAC 1\n* 11th Grade Championship - 8:30pm MAC 3",
                "rulesScreen": null
            },
            "teams": [
                {
                    "divisionName": "5th Grade - Green",
                    "divisionTeams": [
                        {
                            "id": 3222,
                            "name": "Columbia Ravens 5th",
                            "coach": "John Miller"
                        },
                        {
                            "id": 4299,
                            "name": "D1 Spartans",
                            "coach": "Jacob Silverman"
                        },
                        {
                            "id": 3220,
                            "name": "HC Elite OMalley 5th",
                            "coach": "Eddie OMalley"
                        },
                        {
                            "id": 3277,
                            "name": "MD 3D 5th",
                            "coach": "Marty Libinski"
                        },
                        {
                            "id": 3275,
                            "name": "Severn Elite Gold",
                            "coach": "Darryl Adams"
                        },
                        {
                            "id": 3224,
                            "name": "Team Dedication 5th",
                            "coach": "Don Carpenter"
                        }
                    ]
                },
                {
                    "divisionName": "5th Grade - White",
                    "divisionTeams": [
                        {
                            "id": 3225,
                            "name": "CBSA Hoyas 5th Grade",
                            "coach": "Terrance Taylor"
                        },
                        {
                            "id": 3276,
                            "name": "HC Elite 4th Tookes",
                            "coach": "Anthony Tookes"
                        },
                        {
                            "id": 3221,
                            "name": "HC Elite Knisley 5th",
                            "coach": "Jordan Knisley"
                        },
                        {
                            "id": 3226,
                            "name": "Randelstown Runnin Rebels 5th",
                            "coach": "Eric Levi"
                        },
                        {
                            "id": 3223,
                            "name": "Up n Coming Clippers 5th",
                            "coach": "Brian Jackson"
                        }
                    ]
                },
                {
                    "divisionName": "6th Grade",
                    "divisionTeams": [
                        {
                            "id": 3231,
                            "name": "Baltimore Beastmode 6th",
                            "coach": "Joe Hall"
                        },
                        {
                            "id": 3229,
                            "name": "Columbia Ravens 6th",
                            "coach": "Tim Swartz"
                        },
                        {
                            "id": 3278,
                            "name": "Double R Lakers 6th",
                            "coach": "Dameon Smith"
                        },
                        {
                            "id": 3228,
                            "name": "HC Elite Green 6th",
                            "coach": "Steve Michelotti"
                        },
                        {
                            "id": 3227,
                            "name": "HC Elite White 6th",
                            "coach": "Steve Michelotti"
                        },
                        {
                            "id": 3232,
                            "name": "MD 3D  6th",
                            "coach": "Brian Bieman"
                        },
                        {
                            "id": 3230,
                            "name": "Team Dedication 6th",
                            "coach": "Jason Paar"
                        }
                    ]
                },
                {
                    "divisionName": "7th Grade - Green",
                    "divisionTeams": [
                        {
                            "id": 3282,
                            "name": "CC Crush 7th",
                            "coach": "Brandon Costley"
                        },
                        {
                            "id": 3239,
                            "name": "Columbia Ravens - Paugh 7th",
                            "coach": "Dan Paugh"
                        },
                        {
                            "id": 3237,
                            "name": "Columbia Ravens Chamblee 7th",
                            "coach": "Rich Chamblee"
                        },
                        {
                            "id": 3280,
                            "name": "Double R Lakers 7th",
                            "coach": "Ricky Hewlett"
                        },
                        {
                            "id": 4298,
                            "name": "Frederick Storm",
                            "coach": "Manny Powe"
                        },
                        {
                            "id": 3281,
                            "name": "Liberty Dream 7th",
                            "coach": "Jullian Allen"
                        },
                        {
                            "id": 3244,
                            "name": "Randelstown Runnin Rebels 7th",
                            "coach": "Lawrence Brown"
                        },
                        {
                            "id": 3283,
                            "name": "Spartans 7th",
                            "coach": "Ed Hunter"
                        },
                        {
                            "id": 3241,
                            "name": "Team Dedication Blue 7th",
                            "coach": "Tim Hale"
                        }
                    ]
                },
                {
                    "divisionName": "7th Grade - White",
                    "divisionTeams": [
                        {
                            "id": 3243,
                            "name": "CBSA Hoyas  7th",
                            "coach": "Jason Sticher"
                        },
                        {
                            "id": 3238,
                            "name": "Columbia Ravens - Held 7th",
                            "coach": "Rich Held"
                        },
                        {
                            "id": 3235,
                            "name": "HC Elite Green- Hollwedel 7th",
                            "coach": "Chad Hollwedel"
                        },
                        {
                            "id": 3234,
                            "name": "HC Elite Phillips 7th",
                            "coach": "Bill Phillips"
                        },
                        {
                            "id": 3236,
                            "name": "HC Elite White - Hollwedel 7th",
                            "coach": "Chad Hollwedel"
                        },
                        {
                            "id": 3279,
                            "name": "Laurel Stallions 7th",
                            "coach": "Yemi Oshinnaiye"
                        },
                        {
                            "id": 3242,
                            "name": "MD 3D 7th",
                            "coach": "Brad Cantrell"
                        },
                        {
                            "id": 3240,
                            "name": "Team Dedication Gold  7th",
                            "coach": "Dennis Kirkland"
                        }
                    ]
                },
                {
                    "divisionName": "8th Grade - Green",
                    "divisionTeams": [
                        {
                            "id": 3247,
                            "name": "Columbia Ravens 8th",
                            "coach": "Dan Ingersol"
                        },
                        {
                            "id": 3286,
                            "name": "Fairfax Stars 8th",
                            "coach": "Jeff Curfman"
                        },
                        {
                            "id": 3246,
                            "name": "HC Elite Borden 8th",
                            "coach": "BJ Borden"
                        },
                        {
                            "id": 3250,
                            "name": "MD Shockers  8th",
                            "coach": "John McCormick"
                        },
                        {
                            "id": 3252,
                            "name": "MD Wildkatz 8th",
                            "coach": "Frantz Mitchell"
                        }
                    ]
                },
                {
                    "divisionName": "8th Grade - White",
                    "divisionTeams": [
                        {
                            "id": 3285,
                            "name": "Double R Lakers 8th",
                            "coach": "LaVar Tyre"
                        },
                        {
                            "id": 3251,
                            "name": "E-Town Elite 8th",
                            "coach": "Leroy Hill"
                        },
                        {
                            "id": 3245,
                            "name": "HC Elite Eudell 8th",
                            "coach": "Corey Eudell"
                        },
                        {
                            "id": 3284,
                            "name": "MD Finest 8th",
                            "coach": "Tim Womack"
                        },
                        {
                            "id": 3248,
                            "name": "Team Dedication 8th",
                            "coach": "Dennis Kirkland"
                        }
                    ]
                },
                {
                    "divisionName": "9th Grade - Green",
                    "divisionTeams": [
                        {
                            "id": 3262,
                            "name": "CBSA Hoyas 9th",
                            "coach": "Robert Rollins"
                        },
                        {
                            "id": 3253,
                            "name": "HC Elite - Tringali 9th",
                            "coach": "Chris Tringali"
                        },
                        {
                            "id": 3260,
                            "name": "Liberty Road Alliance 9th",
                            "coach": "Lanze Blazek"
                        },
                        {
                            "id": 3255,
                            "name": "MD Hoopmasters 9th",
                            "coach": "Scott Cole"
                        },
                        {
                            "id": 3287,
                            "name": "MD Tar Heels 9th",
                            "coach": "Coach Corey"
                        },
                        {
                            "id": 3257,
                            "name": "Raptors 9th",
                            "coach": "Yong Choe"
                        }
                    ]
                },
                {
                    "divisionName": "9th Grade - White",
                    "divisionTeams": [
                        {
                            "id": 3259,
                            "name": "AIP  9th",
                            "coach": "Brian Brady"
                        },
                        {
                            "id": 3254,
                            "name": "HC Elite - Thai 9th",
                            "coach": "Gary Thai"
                        },
                        {
                            "id": 3256,
                            "name": "Liberty Basketball 9th",
                            "coach": "Dave Tucker"
                        },
                        {
                            "id": 3261,
                            "name": "Urbana Hawks 9th",
                            "coach": "Don DiMatteo"
                        },
                        {
                            "id": 3258,
                            "name": "York Raiders 9th",
                            "coach": "Jay Hall"
                        }
                    ]
                },
                {
                    "divisionName": "HS 10th Grade - Green",
                    "divisionTeams": [
                        {
                            "id": 3288,
                            "name": "BTA Academy 10th",
                            "coach": "Shadeed Sullivan"
                        },
                        {
                            "id": 3268,
                            "name": "EC Cobras 10th",
                            "coach": "Otis Fields"
                        },
                        {
                            "id": 3264,
                            "name": "HC Elite - Clark 10th",
                            "coach": "Dave Clark"
                        },
                        {
                            "id": 3290,
                            "name": "MD 3D 10th",
                            "coach": "Mike Dennin"
                        },
                        {
                            "id": 3267,
                            "name": "Team Ice 10th",
                            "coach": "Eric Roman"
                        }
                    ]
                },
                {
                    "divisionName": "HS 10th Grade - White",
                    "divisionTeams": [
                        {
                            "id": 3265,
                            "name": "Delaware AIM 10th",
                            "coach": "Jason Matthews"
                        },
                        {
                            "id": 3289,
                            "name": "Elite Ballers 10th",
                            "coach": "Andre Ashby"
                        },
                        {
                            "id": 3266,
                            "name": "E-Town Elite 10th",
                            "coach": "Leroy Hill"
                        },
                        {
                            "id": 3263,
                            "name": "HC Elite Stefan 10th",
                            "coach": "James Stefan"
                        },
                        {
                            "id": 3271,
                            "name": "MD Hoopmasters - Woodyard 10th",
                            "coach": "Bruce Woodyard"
                        }
                    ]
                },
                {
                    "divisionName": "HS 11th Grade",
                    "divisionTeams": [
                        {
                            "id": 3292,
                            "name": "CBSA Hoyas 11th",
                            "coach": "Kenny Smith"
                        },
                        {
                            "id": 3270,
                            "name": "HC Elite - Dan Nap 11th",
                            "coach": "Dan Nap"
                        },
                        {
                            "id": 3274,
                            "name": "HC Elite - Stefan 11th",
                            "coach": "James Stefan"
                        },
                        {
                            "id": 3269,
                            "name": "HC Elite - Stock 11th",
                            "coach": "Joe Stock"
                        },
                        {
                            "id": 3272,
                            "name": "MD Hoopmasters - Neville 11th",
                            "coach": "Ray Neville"
                        },
                        {
                            "id": 3291,
                            "name": "MD Tar Heels 11th",
                            "coach": "Ricky Washington"
                        },
                        {
                            "id": 3273,
                            "name": "Team AIP 11th",
                            "coach": "Michael Irvin"
                        }
                    ]
                },
                {
                    "divisionName": "Sunday Championships",
                    "divisionTeams": [
                        {
                            "id": 3294,
                            "name": "5th Grade Green 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3293,
                            "name": "5th Grade White 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3295,
                            "name": "6th Grade 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3296,
                            "name": "6th Grade 2nd Seed",
                            "coach": ""
                        },
                        {
                            "id": 3299,
                            "name": "7th Grade Green 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3300,
                            "name": "7th Grade Green 2nd Seed",
                            "coach": ""
                        },
                        {
                            "id": 3297,
                            "name": "7th Grade White 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3298,
                            "name": "7th Grade White 2nd Seed",
                            "coach": ""
                        },
                        {
                            "id": 3301,
                            "name": "8th Grade Green 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3302,
                            "name": "8th Grade White 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3304,
                            "name": "9th Grade Green 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3303,
                            "name": "9th Grade White 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3306,
                            "name": "HS 10th Grade Green 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3305,
                            "name": "HS 10th Grade White 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3307,
                            "name": "HS 11th Grade 1st Seed",
                            "coach": ""
                        },
                        {
                            "id": 3308,
                            "name": "HS 11th Grade 2nd Seed",
                            "coach": ""
                        }
                    ]
                }
            ],
            "locations": [
                {
                    "id": 1015,
                    "name": "Gary Arthur Community Center ct 7",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "address": "2400 Rt 97, Cookesville, MD 21723",
                    "latitude": 39.3,
                    "longitude": -77.02
                },
                {
                    "id": 1016,
                    "name": "Gary Arthur Community Center ct 8",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "address": "2400 Rt 97, Cookesville, MD 21723",
                    "latitude": 39.3,
                    "longitude": -77.02
                },
                {
                    "id": 1004,
                    "name": "Howard HS",
                    "locationUrl": "http://goo.gl/maps/xvgPm",
                    "address": "8700 Old Annapolis Road, Ellicott City, MD 21043",
                    "latitude": 39.22,
                    "longitude": -76.81
                },
                {
                    "id": 3,
                    "name": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 4,
                    "name": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 5,
                    "name": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 6,
                    "name": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 1003,
                    "name": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
                    "latitude": 39.11,
                    "longitude": -76.83
                },
                {
                    "id": 1011,
                    "name": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
                    "latitude": 39.11,
                    "longitude": -76.83
                }
            ],
            "games": [
                {
                    "id": 4764,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HC Elite OMalley 5th",
                    "team1Id": 3220,
                    "team2": "Team Dedication 5th",
                    "team2Id": 3224,
                    "team1Score": "46",
                    "team2Score": "35",
                    "time": "2014-05-02T18:00:00"
                },
                {
                    "id": 4767,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HC Elite Green- Hollwedel 7th",
                    "team1Id": 3235,
                    "team2": "Team Dedication Gold  7th",
                    "team2Id": 3240,
                    "team1Score": "36",
                    "team2Score": "41",
                    "time": "2014-05-02T18:00:00"
                },
                {
                    "id": 4768,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HC Elite Eudell 8th",
                    "team1Id": 3245,
                    "team2": "Team Dedication 8th",
                    "team2Id": 3248,
                    "team1Score": "46",
                    "team2Score": "29",
                    "time": "2014-05-02T19:00:00"
                },
                {
                    "id": 4765,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HC Elite White - Hollwedel 7th",
                    "team1Id": 3236,
                    "team2": "Columbia Ravens - Held 7th",
                    "team2Id": 3238,
                    "team1Score": "32",
                    "team2Score": "30",
                    "time": "2014-05-02T19:00:00"
                },
                {
                    "id": 4770,
                    "location": "Howard HS",
                    "locationUrl": "http://goo.gl/maps/xvgPm",
                    "locationId": 1004,
                    "team1": "HC Elite - Dan Nap 11th",
                    "team1Id": 3270,
                    "team2": "MD Hoopmasters - Neville 11th",
                    "team2Id": 3272,
                    "team1Score": "64",
                    "team2Score": "33",
                    "time": "2014-05-02T19:15:00"
                },
                {
                    "id": 4766,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HC Elite Stefan 10th",
                    "team1Id": 3263,
                    "team2": "MD Hoopmasters - Woodyard 10th",
                    "team2Id": 3271,
                    "team1Score": "77",
                    "team2Score": "46",
                    "time": "2014-05-02T20:00:00"
                },
                {
                    "id": 4769,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HC Elite - Thai 9th",
                    "team1Id": 3254,
                    "team2": "Urbana Hawks 9th",
                    "team2Id": 3261,
                    "team1Score": "61",
                    "team2Score": "32",
                    "time": "2014-05-02T20:00:00"
                },
                {
                    "id": 4771,
                    "location": "Howard HS",
                    "locationUrl": "http://goo.gl/maps/xvgPm",
                    "locationId": 1004,
                    "team1": "MD Shockers  8th",
                    "team1Id": 3250,
                    "team2": "Columbia Ravens 8th",
                    "team2Id": 3247,
                    "team1Score": "16",
                    "team2Score": "67",
                    "time": "2014-05-02T20:15:00"
                },
                {
                    "id": 4772,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite - Clark 10th",
                    "team1Id": 3264,
                    "team2": "EC Cobras 10th",
                    "team2Id": 3268,
                    "team1Score": "51",
                    "team2Score": "32",
                    "time": "2014-05-03T08:00:00"
                },
                {
                    "id": 4785,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite Green 6th",
                    "team1Id": 3228,
                    "team2": "HC Elite White 6th",
                    "team2Id": 3227,
                    "team1Score": "45",
                    "team2Score": "47",
                    "time": "2014-05-03T08:00:00"
                },
                {
                    "id": 4798,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite Knisley 5th",
                    "team1Id": 3221,
                    "team2": "HC Elite 4th Tookes",
                    "team2Id": 3276,
                    "team1Score": "40",
                    "team2Score": "44",
                    "time": "2014-05-03T08:00:00"
                },
                {
                    "id": 4857,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite Borden 8th",
                    "team1Id": 3246,
                    "team2": "MD Wildkatz 8th",
                    "team2Id": 3252,
                    "team1Score": "60",
                    "team2Score": "27",
                    "time": "2014-05-03T08:00:00"
                },
                {
                    "id": 4799,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Severn Elite Gold",
                    "team1Id": 3275,
                    "team2": "Team Dedication 5th",
                    "team2Id": 3224,
                    "team1Score": "49",
                    "team2Score": "15",
                    "time": "2014-05-03T09:00:00"
                },
                {
                    "id": 4786,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite Borden 8th",
                    "team1Id": 3246,
                    "team2": "MD Shockers  8th",
                    "team2Id": 3250,
                    "team1Score": "77",
                    "team2Score": "2",
                    "time": "2014-05-03T09:00:00"
                },
                {
                    "id": 4773,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite - Thai 9th",
                    "team1Id": 3254,
                    "team2": "Liberty Basketball 9th",
                    "team2Id": 3256,
                    "team1Score": "35",
                    "team2Score": "60",
                    "time": "2014-05-03T09:00:00"
                },
                {
                    "id": 4811,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Team Dedication Gold  7th",
                    "team1Id": 3240,
                    "team2": "Columbia Ravens - Held 7th",
                    "team2Id": 3238,
                    "team1Score": "56",
                    "team2Score": "32",
                    "time": "2014-05-03T09:00:00"
                },
                {
                    "id": 4812,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite - Tringali 9th",
                    "team1Id": 3253,
                    "team2": "MD Tar Heels 9th",
                    "team2Id": 3287,
                    "team1Score": "45",
                    "team2Score": "31",
                    "time": "2014-05-03T10:00:00"
                },
                {
                    "id": 4774,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "EC Cobras 10th",
                    "team1Id": 3268,
                    "team2": "MD 3D 10th",
                    "team2Id": 3290,
                    "team1Score": "42",
                    "team2Score": "40",
                    "time": "2014-05-03T10:00:00"
                },
                {
                    "id": 4787,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "CBSA Hoyas 11th",
                    "team1Id": 3292,
                    "team2": "MD Tar Heels 11th",
                    "team2Id": 3291,
                    "team1Score": "56",
                    "team2Score": "44",
                    "time": "2014-05-03T10:00:00"
                },
                {
                    "id": 4800,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite 4th Tookes",
                    "team1Id": 3276,
                    "team2": "Randelstown Runnin Rebels 5th",
                    "team2Id": 3226,
                    "team1Score": "47",
                    "team2Score": "22",
                    "time": "2014-05-03T10:00:00"
                },
                {
                    "id": 4801,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Severn Elite Gold",
                    "team1Id": 3275,
                    "team2": "CBSA Hoyas 5th Grade",
                    "team2Id": 3225,
                    "team1Score": "38",
                    "team2Score": "37",
                    "time": "2014-05-03T11:00:00"
                },
                {
                    "id": 4788,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Double R Lakers 6th",
                    "team1Id": 3278,
                    "team2": "Baltimore Beastmode 6th",
                    "team2Id": 3231,
                    "team1Score": "38",
                    "team2Score": "26",
                    "time": "2014-05-03T11:00:00"
                },
                {
                    "id": 4775,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Liberty Basketball 9th",
                    "team1Id": 3256,
                    "team2": "York Raiders 9th",
                    "team2Id": 3258,
                    "team1Score": "37",
                    "team2Score": "52",
                    "time": "2014-05-03T11:00:00"
                },
                {
                    "id": 4813,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite Stefan 10th",
                    "team1Id": 3263,
                    "team2": "Delaware AIM 10th",
                    "team2Id": 3265,
                    "team1Score": "81",
                    "team2Score": "36",
                    "time": "2014-05-03T11:00:00"
                },
                {
                    "id": 4823,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Team Dedication Gold  7th",
                    "team1Id": 3240,
                    "team2": "HC Elite Phillips 7th",
                    "team2Id": 3234,
                    "team1Score": "33",
                    "team2Score": "40",
                    "time": "2014-05-03T11:15:00"
                },
                {
                    "id": 4832,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Team Dedication Blue 7th",
                    "team1Id": 3241,
                    "team2": "CC Crush 7th",
                    "team2Id": 3282,
                    "team1Score": "46",
                    "team2Score": "33",
                    "time": "2014-05-03T11:15:00"
                },
                {
                    "id": 4833,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Columbia Ravens - Paugh 7th",
                    "team1Id": 3239,
                    "team2": "Randelstown Runnin Rebels 7th",
                    "team2Id": 3244,
                    "team1Score": "30",
                    "team2Score": "44",
                    "time": "2014-05-03T12:15:00"
                },
                {
                    "id": 4824,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Team Dedication 5th",
                    "team1Id": 3224,
                    "team2": "HC Elite Knisley 5th",
                    "team2Id": 3221,
                    "team1Score": "21",
                    "team2Score": "1",
                    "time": "2014-05-03T12:15:00"
                },
                {
                    "id": 4814,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Team Ice 10th",
                    "team1Id": 3267,
                    "team2": "EC Cobras 10th",
                    "team2Id": 3268,
                    "team1Score": "31",
                    "team2Score": "36",
                    "time": "2014-05-03T12:15:00"
                },
                {
                    "id": 4776,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "MD Tar Heels 9th",
                    "team1Id": 3287,
                    "team2": "Raptors 9th",
                    "team2Id": 3257,
                    "team1Score": "47",
                    "team2Score": "34",
                    "time": "2014-05-03T12:15:00"
                },
                {
                    "id": 4789,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite White 6th",
                    "team1Id": 3227,
                    "team2": "Columbia Ravens 6th",
                    "team2Id": 3229,
                    "team1Score": "35",
                    "team2Score": "28",
                    "time": "2014-05-03T12:15:00"
                },
                {
                    "id": 4802,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens 5th",
                    "team1Id": 3222,
                    "team2": "HC Elite OMalley 5th",
                    "team2Id": 3220,
                    "team1Score": "43",
                    "team2Score": "44",
                    "time": "2014-05-03T12:15:00"
                },
                {
                    "id": 4855,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Double R Lakers 8th",
                    "team1Id": 3285,
                    "team2": "E-Town Elite 8th",
                    "team2Id": 3251,
                    "team1Score": "49",
                    "team2Score": "14",
                    "time": "2014-05-03T13:15:00"
                },
                {
                    "id": 4790,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "MD Shockers  8th",
                    "team1Id": 3250,
                    "team2": "MD Wildkatz 8th",
                    "team2Id": 3252,
                    "team1Score": "28",
                    "team2Score": "27",
                    "time": "2014-05-03T13:15:00"
                },
                {
                    "id": 4777,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Delaware AIM 10th",
                    "team1Id": 3265,
                    "team2": "MD Hoopmasters - Woodyard 10th",
                    "team2Id": 3271,
                    "team1Score": "38",
                    "team2Score": "31",
                    "time": "2014-05-03T13:15:00"
                },
                {
                    "id": 4815,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "BTA Academy 10th",
                    "team1Id": 3288,
                    "team2": "MD 3D 10th",
                    "team2Id": 3290,
                    "team1Score": "46",
                    "team2Score": "59",
                    "time": "2014-05-03T13:15:00"
                },
                {
                    "id": 4825,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Team Dedication Gold  7th",
                    "team1Id": 3240,
                    "team2": "CBSA Hoyas  7th",
                    "team2Id": 3243,
                    "team1Score": "60",
                    "team2Score": "50",
                    "time": "2014-05-03T13:15:00"
                },
                {
                    "id": 4834,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "CC Crush 7th",
                    "team1Id": 3282,
                    "team2": "Double R Lakers 7th",
                    "team2Id": 3280,
                    "team1Score": "25",
                    "team2Score": "62",
                    "time": "2014-05-03T13:15:00"
                },
                {
                    "id": 4835,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Spartans 7th",
                    "team1Id": 3283,
                    "team2": "Team Dedication Blue 7th",
                    "team2Id": 3241,
                    "team1Score": "36",
                    "team2Score": "31",
                    "time": "2014-05-03T14:15:00"
                },
                {
                    "id": 4826,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "MD 3D 7th",
                    "team1Id": 3242,
                    "team2": "HC Elite Phillips 7th",
                    "team2Id": 3234,
                    "team1Score": "48",
                    "team2Score": "39",
                    "time": "2014-05-03T14:15:00"
                },
                {
                    "id": 4816,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite - Clark 10th",
                    "team1Id": 3264,
                    "team2": "Team Ice 10th",
                    "team2Id": 3267,
                    "team1Score": "64",
                    "team2Score": "37",
                    "time": "2014-05-03T14:15:00"
                },
                {
                    "id": 4778,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite - Thai 9th",
                    "team1Id": 3254,
                    "team2": "York Raiders 9th",
                    "team2Id": 3258,
                    "team1Score": "42",
                    "team2Score": "60",
                    "time": "2014-05-03T14:15:00"
                },
                {
                    "id": 4791,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Double R Lakers 6th",
                    "team1Id": 3278,
                    "team2": "Columbia Ravens 6th",
                    "team2Id": 3229,
                    "team1Score": "29",
                    "team2Score": "35",
                    "time": "2014-05-03T14:15:00"
                },
                {
                    "id": 4804,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Severn Elite Gold",
                    "team1Id": 3275,
                    "team2": "Columbia Ravens 5th",
                    "team2Id": 3222,
                    "team1Score": "35",
                    "team2Score": "34",
                    "time": "2014-05-03T14:15:00"
                },
                {
                    "id": 4805,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite - Dan Nap 11th",
                    "team1Id": 3270,
                    "team2": "MD Tar Heels 11th",
                    "team2Id": 3291,
                    "team1Score": "53",
                    "team2Score": "42",
                    "time": "2014-05-03T15:15:00"
                },
                {
                    "id": 4792,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite Green 6th",
                    "team1Id": 3228,
                    "team2": "Team Dedication 6th",
                    "team2Id": 3230,
                    "team1Score": "49",
                    "team2Score": "21",
                    "time": "2014-05-03T15:15:00"
                },
                {
                    "id": 4779,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "MD Hoopmasters - Neville 11th",
                    "team1Id": 3272,
                    "team2": "Team AIP 11th",
                    "team2Id": 3273,
                    "team1Score": "41",
                    "team2Score": "68",
                    "time": "2014-05-03T15:15:00"
                },
                {
                    "id": 4817,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite - Stefan 11th",
                    "team1Id": 3274,
                    "team2": "CBSA Hoyas 11th",
                    "team2Id": 3292,
                    "team1Score": "80",
                    "team2Score": "59",
                    "time": "2014-05-03T15:15:00"
                },
                {
                    "id": 4827,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "CBSA Hoyas  7th",
                    "team1Id": 3243,
                    "team2": "HC Elite White - Hollwedel 7th",
                    "team2Id": 3236,
                    "team1Score": "31",
                    "team2Score": "48",
                    "time": "2014-05-03T15:15:00"
                },
                {
                    "id": 4836,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Liberty Dream 7th",
                    "team1Id": 3281,
                    "team2": "Columbia Ravens - Paugh 7th",
                    "team2Id": 3239,
                    "team1Score": "32",
                    "team2Score": "43",
                    "time": "2014-05-03T15:15:00"
                },
                {
                    "id": 4837,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Double R Lakers 7th",
                    "team1Id": 3280,
                    "team2": "Spartans 7th",
                    "team2Id": 3283,
                    "team1Score": "40",
                    "team2Score": "25",
                    "time": "2014-05-03T16:30:00"
                },
                {
                    "id": 4828,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Columbia Ravens Chamblee 7th",
                    "team1Id": 3237,
                    "team2": "Randelstown Runnin Rebels 7th",
                    "team2Id": 3244,
                    "team1Score": "23",
                    "team2Score": "65",
                    "time": "2014-05-03T16:30:00"
                },
                {
                    "id": 4818,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "E-Town Elite 10th",
                    "team1Id": 3266,
                    "team2": "Elite Ballers 10th",
                    "team2Id": 3289,
                    "team1Score": "28",
                    "team2Score": "57",
                    "time": "2014-05-03T16:30:00"
                },
                {
                    "id": 4780,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "MD Hoopmasters 9th",
                    "team1Id": 3255,
                    "team2": "Raptors 9th",
                    "team2Id": 3257,
                    "team1Score": "58",
                    "team2Score": "39",
                    "time": "2014-05-03T16:30:00"
                },
                {
                    "id": 4793,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "CBSA Hoyas 9th",
                    "team1Id": 3262,
                    "team2": "Liberty Road Alliance 9th",
                    "team2Id": 3260,
                    "team1Score": "38",
                    "team2Score": "52",
                    "time": "2014-05-03T16:30:00"
                },
                {
                    "id": 4797,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Team Dedication 8th",
                    "team1Id": 3248,
                    "team2": "Double R Lakers 8th",
                    "team2Id": 3285,
                    "team1Score": "44",
                    "team2Score": "41",
                    "time": "2014-05-03T16:30:00"
                },
                {
                    "id": 4807,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens 8th",
                    "team1Id": 3247,
                    "team2": "Fairfax Stars 8th",
                    "team2Id": 3286,
                    "team1Score": "34",
                    "team2Score": "45",
                    "time": "2014-05-03T17:30:00"
                },
                {
                    "id": 4794,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Team Dedication 6th",
                    "team1Id": 3230,
                    "team2": "MD 3D  6th",
                    "team2Id": 3232,
                    "team1Score": "28",
                    "team2Score": "36",
                    "time": "2014-05-03T17:30:00"
                },
                {
                    "id": 4781,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "AIP  9th",
                    "team1Id": 3259,
                    "team2": "HC Elite - Thai 9th",
                    "team2Id": 3254,
                    "team1Score": "52",
                    "team2Score": "42",
                    "time": "2014-05-03T17:30:00"
                },
                {
                    "id": 4819,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Team Ice 10th",
                    "team1Id": 3267,
                    "team2": "BTA Academy 10th",
                    "team2Id": 3288,
                    "team1Score": "44",
                    "team2Score": "46",
                    "time": "2014-05-03T17:30:00"
                },
                {
                    "id": 4829,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Frederick Storm",
                    "team1Id": 4298,
                    "team2": "MD 3D 7th",
                    "team2Id": 3242,
                    "team1Score": "42",
                    "team2Score": "58",
                    "time": "2014-05-03T17:30:00"
                },
                {
                    "id": 4838,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HC Elite Green- Hollwedel 7th",
                    "team1Id": 3235,
                    "team2": "Laurel Stallions 7th",
                    "team2Id": 3279,
                    "team1Score": "60",
                    "team2Score": "34",
                    "time": "2014-05-03T17:30:00"
                },
                {
                    "id": 4839,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Columbia Ravens Chamblee 7th",
                    "team1Id": 3237,
                    "team2": "Liberty Dream 7th",
                    "team2Id": 3281,
                    "team1Score": "45",
                    "team2Score": "49",
                    "time": "2014-05-03T18:30:00"
                },
                {
                    "id": 4830,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "MD Finest 8th",
                    "team1Id": 3284,
                    "team2": "HC Elite Eudell 8th",
                    "team2Id": 3245,
                    "team1Score": "38",
                    "team2Score": "32",
                    "time": "2014-05-03T18:30:00"
                },
                {
                    "id": 4820,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Elite Ballers 10th",
                    "team1Id": 3289,
                    "team2": "MD Hoopmasters - Woodyard 10th",
                    "team2Id": 3271,
                    "team1Score": "59",
                    "team2Score": "49",
                    "time": "2014-05-03T18:30:00"
                },
                {
                    "id": 4782,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Liberty Road Alliance 9th",
                    "team1Id": 3260,
                    "team2": "MD Hoopmasters 9th",
                    "team2Id": 3255,
                    "team1Score": "32",
                    "team2Score": "46",
                    "time": "2014-05-03T18:30:00"
                },
                {
                    "id": 4795,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Team Dedication 8th",
                    "team1Id": 3248,
                    "team2": "E-Town Elite 8th",
                    "team2Id": 3251,
                    "team1Score": "50",
                    "team2Score": "22",
                    "time": "2014-05-03T18:30:00"
                },
                {
                    "id": 4808,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Randelstown Runnin Rebels 5th",
                    "team1Id": 3226,
                    "team2": "CBSA Hoyas 5th Grade",
                    "team2Id": 3225,
                    "team1Score": "25",
                    "team2Score": "38",
                    "time": "2014-05-03T18:30:00"
                },
                {
                    "id": 4809,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "MD 3D  6th",
                    "team1Id": 3232,
                    "team2": "HC Elite White 6th",
                    "team2Id": 3227,
                    "team1Score": "21",
                    "team2Score": "44",
                    "time": "2014-05-03T19:30:00"
                },
                {
                    "id": 4796,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Fairfax Stars 8th",
                    "team1Id": 3286,
                    "team2": "MD Shockers  8th",
                    "team2Id": 3250,
                    "team1Score": "95",
                    "team2Score": "15",
                    "time": "2014-05-03T19:30:00"
                },
                {
                    "id": 4783,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Urbana Hawks 9th",
                    "team1Id": 3261,
                    "team2": "AIP  9th",
                    "team2Id": 3259,
                    "team1Score": "30",
                    "team2Score": "64",
                    "time": "2014-05-03T19:30:00"
                },
                {
                    "id": 4821,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "E-Town Elite 10th",
                    "team1Id": 3266,
                    "team2": "HC Elite Stefan 10th",
                    "team2Id": 3263,
                    "team1Score": "40",
                    "team2Score": "78",
                    "time": "2014-05-03T19:30:00"
                },
                {
                    "id": 4831,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "MD 3D 7th",
                    "team1Id": 3242,
                    "team2": "HC Elite Green- Hollwedel 7th",
                    "team2Id": 3235,
                    "team1Score": "40",
                    "team2Score": "46",
                    "time": "2014-05-03T19:30:00"
                },
                {
                    "id": 4840,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Columbia Ravens - Held 7th",
                    "team1Id": 3238,
                    "team2": "Laurel Stallions 7th",
                    "team2Id": 3279,
                    "team1Score": "36",
                    "team2Score": "54",
                    "time": "2014-05-03T19:30:00"
                },
                {
                    "id": 4822,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite - Stefan 11th",
                    "team1Id": 3274,
                    "team2": "HC Elite - Dan Nap 11th",
                    "team2Id": 3270,
                    "team1Score": "61",
                    "team2Score": "59",
                    "time": "2014-05-03T20:30:00"
                },
                {
                    "id": 4784,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite - Tringali 9th",
                    "team1Id": 3253,
                    "team2": "Raptors 9th",
                    "team2Id": 3257,
                    "team1Score": "53",
                    "team2Score": "19",
                    "time": "2014-05-03T20:30:00"
                },
                {
                    "id": 4810,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite - Stock 11th",
                    "team1Id": 3269,
                    "team2": "MD Hoopmasters - Neville 11th",
                    "team2Id": 3272,
                    "team1Score": "44",
                    "team2Score": "45",
                    "time": "2014-05-03T20:30:00"
                },
                {
                    "id": 4861,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Baltimore Beastmode 6th",
                    "team1Id": 3231,
                    "team2": "Team Dedication 6th",
                    "team2Id": 3230,
                    "team1Score": "29",
                    "team2Score": "20",
                    "time": "2014-05-04T09:00:00"
                },
                {
                    "id": 5907,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite Knisley 5th",
                    "team1Id": 3221,
                    "team2": "HC Elite OMalley 5th",
                    "team2Id": 3220,
                    "team1Score": "58",
                    "team2Score": "73",
                    "time": "2014-05-04T09:00:00"
                },
                {
                    "id": 4841,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite - Dan Nap 11th",
                    "team1Id": 3270,
                    "team2": "HC Elite - Stock 11th",
                    "team2Id": 3269,
                    "team1Score": "55",
                    "team2Score": "43",
                    "time": "2014-05-04T09:00:00"
                },
                {
                    "id": 4851,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Columbia Ravens 6th",
                    "team1Id": 3229,
                    "team2": "MD 3D  6th",
                    "team2Id": 3232,
                    "team1Score": "53",
                    "team2Score": "39",
                    "time": "2014-05-04T09:00:00"
                },
                {
                    "id": 4888,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HC Elite Phillips 7th",
                    "team1Id": 3234,
                    "team2": "HC Elite White - Hollwedel 7th",
                    "team2Id": 3236,
                    "team1Score": "39",
                    "team2Score": "32",
                    "time": "2014-05-04T09:00:00"
                },
                {
                    "id": 4879,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Team Dedication Blue 7th",
                    "team1Id": 3241,
                    "team2": "Liberty Dream 7th",
                    "team2Id": 3281,
                    "team1Score": "30",
                    "team2Score": "37",
                    "time": "2014-05-04T09:00:00"
                },
                {
                    "id": 4880,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Columbia Ravens - Paugh 7th",
                    "team1Id": 3239,
                    "team2": "Spartans 7th",
                    "team2Id": 3283,
                    "team1Score": "63",
                    "team2Score": "24",
                    "time": "2014-05-04T10:00:00"
                },
                {
                    "id": 4889,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "CBSA Hoyas  7th",
                    "team1Id": 3243,
                    "team2": "MD 3D 7th",
                    "team2Id": 3242,
                    "team1Score": "34",
                    "team2Score": "56",
                    "time": "2014-05-04T10:00:00"
                },
                {
                    "id": 4852,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "MD Finest 8th",
                    "team1Id": 3284,
                    "team2": "Double R Lakers 8th",
                    "team2Id": 3285,
                    "team1Score": "59",
                    "team2Score": "38",
                    "time": "2014-05-04T10:00:00"
                },
                {
                    "id": 4842,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "AIP  9th",
                    "team1Id": 3259,
                    "team2": "Liberty Basketball 9th",
                    "team2Id": 3256,
                    "team1Score": "33",
                    "team2Score": "62",
                    "time": "2014-05-04T10:00:00"
                },
                {
                    "id": 4871,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite Stefan 10th",
                    "team1Id": 3263,
                    "team2": "Elite Ballers 10th",
                    "team2Id": 3289,
                    "team1Score": "54",
                    "team2Score": "49",
                    "time": "2014-05-04T10:00:00"
                },
                {
                    "id": 4862,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Fairfax Stars 8th",
                    "team1Id": 3286,
                    "team2": "MD Wildkatz 8th",
                    "team2Id": 3252,
                    "team1Score": "61",
                    "team2Score": "12",
                    "time": "2014-05-04T10:00:00"
                },
                {
                    "id": 4863,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "MD 3D  6th",
                    "team1Id": 3232,
                    "team2": "Baltimore Beastmode 6th",
                    "team2Id": 3231,
                    "team1Score": "21",
                    "team2Score": "41",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 4872,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite - Stefan 11th",
                    "team1Id": 3274,
                    "team2": "MD Tar Heels 11th",
                    "team2Id": 3291,
                    "team1Score": "50",
                    "team2Score": "40",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 4843,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite - Tringali 9th",
                    "team1Id": 3253,
                    "team2": "MD Hoopmasters 9th",
                    "team2Id": 3255,
                    "team1Score": "58",
                    "team2Score": "18",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 4853,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite Green 6th",
                    "team1Id": 3228,
                    "team2": "Columbia Ravens 6th",
                    "team2Id": 3229,
                    "team1Score": "52",
                    "team2Score": "12",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 4881,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HC Elite - Stock 11th",
                    "team1Id": 3269,
                    "team2": "Team AIP 11th",
                    "team2Id": 3273,
                    "team1Score": "41",
                    "team2Score": "78",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 4897,
                    "location": "Gary Arthur Community Center ct 7",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1015,
                    "team1": "Team Dedication 5th",
                    "team1Id": 3224,
                    "team2": "Randelstown Runnin Rebels 5th",
                    "team2Id": 3226,
                    "team1Score": "42",
                    "team2Score": "27",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 4902,
                    "location": "Gary Arthur Community Center ct 8",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1016,
                    "team1": "MD 3D 5th",
                    "team1Id": 3277,
                    "team2": "Columbia Ravens 5th",
                    "team2Id": 3222,
                    "team1Score": "25",
                    "team2Score": "38",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 4891,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HC Elite Green- Hollwedel 7th",
                    "team1Id": 3235,
                    "team2": "HC Elite White - Hollwedel 7th",
                    "team2Id": 3236,
                    "team1Score": "59",
                    "team2Score": "23",
                    "time": "2014-05-04T11:00:00"
                },
                {
                    "id": 5908,
                    "location": "Gary Arthur Community Center ct 8",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1016,
                    "team1": "Team Dedication Blue 7th",
                    "team1Id": 3241,
                    "team2": "Frederick Storm",
                    "team2Id": 4298,
                    "team1Score": "26",
                    "team2Score": "40",
                    "time": "2014-05-04T12:00:00"
                },
                {
                    "id": 4898,
                    "location": "Gary Arthur Community Center ct 7",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1015,
                    "team1": "CBSA Hoyas 5th Grade",
                    "team1Id": 3225,
                    "team2": "HC Elite Knisley 5th",
                    "team2Id": 3221,
                    "team1Score": "46",
                    "team2Score": "36",
                    "time": "2014-05-04T12:00:00"
                },
                {
                    "id": 4890,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "CBSA Hoyas  7th",
                    "team1Id": 3243,
                    "team2": "Laurel Stallions 7th",
                    "team2Id": 3279,
                    "team1Score": "42",
                    "team2Score": "47",
                    "time": "2014-05-04T12:00:00"
                },
                {
                    "id": 4854,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Team Dedication 8th",
                    "team1Id": 3248,
                    "team2": "MD Finest 8th",
                    "team2Id": 3284,
                    "team1Score": "34",
                    "team2Score": "51",
                    "time": "2014-05-04T12:00:00"
                },
                {
                    "id": 4844,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "York Raiders 9th",
                    "team1Id": 3258,
                    "team2": "AIP  9th",
                    "team2Id": 3259,
                    "team1Score": "52",
                    "team2Score": "58",
                    "time": "2014-05-04T12:00:00"
                },
                {
                    "id": 4873,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "CBSA Hoyas 9th",
                    "team1Id": 3262,
                    "team2": "Raptors 9th",
                    "team2Id": 3257,
                    "team1Score": "49",
                    "team2Score": "46",
                    "time": "2014-05-04T12:00:00"
                },
                {
                    "id": 4864,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite Borden 8th",
                    "team1Id": 3246,
                    "team2": "Fairfax Stars 8th",
                    "team2Id": 3286,
                    "team1Score": "20",
                    "team2Score": "44",
                    "time": "2014-05-04T12:00:00"
                },
                {
                    "id": 4883,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Columbia Ravens Chamblee 7th",
                    "team1Id": 3237,
                    "team2": "CC Crush 7th",
                    "team2Id": 3282,
                    "team1Score": "37",
                    "team2Score": "43",
                    "time": "2014-05-04T13:00:00"
                },
                {
                    "id": 4904,
                    "location": "Gary Arthur Community Center ct 8",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1016,
                    "team1": "MD 3D 5th",
                    "team1Id": 3277,
                    "team2": "Severn Elite Gold",
                    "team2Id": 3275,
                    "team1Score": "40",
                    "team2Score": "19",
                    "time": "2014-05-04T13:00:00"
                },
                {
                    "id": 4893,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Double R Lakers 7th",
                    "team1Id": 3280,
                    "team2": "Liberty Dream 7th",
                    "team2Id": 3281,
                    "team1Score": "39",
                    "team2Score": "36",
                    "time": "2014-05-04T13:00:00"
                },
                {
                    "id": 5909,
                    "location": "Gary Arthur Community Center ct 7",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1015,
                    "team1": "Randelstown Runnin Rebels 7th",
                    "team1Id": 3244,
                    "team2": "Frederick Storm",
                    "team2Id": 4298,
                    "team1Score": "76",
                    "team2Score": "30",
                    "time": "2014-05-04T13:00:00"
                },
                {
                    "id": 4865,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Team Dedication 6th",
                    "team1Id": 3230,
                    "team2": "Double R Lakers 6th",
                    "team2Id": 3278,
                    "team1Score": "31",
                    "team2Score": "30",
                    "time": "2014-05-04T13:15:00"
                },
                {
                    "id": 4874,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite - Stefan 11th",
                    "team1Id": 3274,
                    "team2": "Team AIP 11th",
                    "team2Id": 3273,
                    "team1Score": "60",
                    "team2Score": "71",
                    "time": "2014-05-04T13:15:00"
                },
                {
                    "id": 4845,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Liberty Basketball 9th",
                    "team1Id": 3256,
                    "team2": "Urbana Hawks 9th",
                    "team2Id": 3261,
                    "team1Score": "69",
                    "team2Score": "38",
                    "time": "2014-05-04T13:15:00"
                },
                {
                    "id": 4866,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "MD Wildkatz 8th",
                    "team1Id": 3252,
                    "team2": "Columbia Ravens 8th",
                    "team2Id": 3247,
                    "team1Score": "20",
                    "team2Score": "50",
                    "time": "2014-05-04T13:15:00"
                },
                {
                    "id": 4892,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HC Elite Phillips 7th",
                    "team1Id": 3234,
                    "team2": "Laurel Stallions 7th",
                    "team2Id": 3279,
                    "team1Score": "47",
                    "team2Score": "42",
                    "time": "2014-05-04T14:00:00"
                },
                {
                    "id": 4905,
                    "location": "Gary Arthur Community Center ct 8",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1016,
                    "team1": "CBSA Hoyas 5th Grade",
                    "team1Id": 3225,
                    "team2": "HC Elite 4th Tookes",
                    "team2Id": 3276,
                    "team1Score": "28",
                    "team2Score": "34",
                    "time": "2014-05-04T14:00:00"
                },
                {
                    "id": 4900,
                    "location": "Gary Arthur Community Center ct 7",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1015,
                    "team1": "HC Elite Knisley 5th",
                    "team1Id": 3221,
                    "team2": "Randelstown Runnin Rebels 5th",
                    "team2Id": 3226,
                    "team1Score": "28",
                    "team2Score": "34",
                    "time": "2014-05-04T14:00:00"
                },
                {
                    "id": 4884,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Delaware AIM 10th",
                    "team1Id": 3265,
                    "team2": "E-Town Elite 10th",
                    "team2Id": 3266,
                    "team1Score": "36",
                    "team2Score": "25",
                    "time": "2014-05-04T14:00:00"
                },
                {
                    "id": 4856,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite - Clark 10th",
                    "team1Id": 3264,
                    "team2": "BTA Academy 10th",
                    "team2Id": 3288,
                    "team1Score": "51",
                    "team2Score": "33",
                    "time": "2014-05-04T14:15:00"
                },
                {
                    "id": 4846,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "MD Hoopmasters 9th",
                    "team1Id": 3255,
                    "team2": "CBSA Hoyas 9th",
                    "team2Id": 3262,
                    "team1Score": "55",
                    "team2Score": "57",
                    "time": "2014-05-04T14:15:00"
                },
                {
                    "id": 4875,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "MD 3D 10th",
                    "team1Id": 3290,
                    "team2": "Team Ice 10th",
                    "team2Id": 3267,
                    "team1Score": "61",
                    "team2Score": "33",
                    "time": "2014-05-04T14:15:00"
                },
                {
                    "id": 4803,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Baltimore Beastmode 6th",
                    "team1Id": 3231,
                    "team2": "HC Elite Green 6th",
                    "team2Id": 3228,
                    "team1Score": "24",
                    "team2Score": "39",
                    "time": "2014-05-04T14:15:00"
                },
                {
                    "id": 4885,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HC Elite - Tringali 9th",
                    "team1Id": 3253,
                    "team2": "Liberty Road Alliance 9th",
                    "team2Id": 3260,
                    "team1Score": "38",
                    "team2Score": "16",
                    "time": "2014-05-04T15:00:00"
                },
                {
                    "id": 4901,
                    "location": "Gary Arthur Community Center ct 7",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1015,
                    "team1": "MD Finest 8th",
                    "team1Id": 3284,
                    "team2": "E-Town Elite 8th",
                    "team2Id": 3251,
                    "team1Score": "48",
                    "team2Score": "29",
                    "time": "2014-05-04T15:00:00"
                },
                {
                    "id": 4906,
                    "location": "Gary Arthur Community Center ct 8",
                    "locationUrl": "http://goo.gl/maps/E0Mhb",
                    "locationId": 1016,
                    "team1": "HC Elite Eudell 8th",
                    "team1Id": 3245,
                    "team2": "Double R Lakers 8th",
                    "team2Id": 3285,
                    "team1Score": "45",
                    "team2Score": "42",
                    "time": "2014-05-04T15:00:00"
                },
                {
                    "id": 4894,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Columbia Ravens Chamblee 7th",
                    "team1Id": 3237,
                    "team2": "Spartans 7th",
                    "team2Id": 3283,
                    "team1Score": "27",
                    "team2Score": "37",
                    "time": "2014-05-04T15:00:00"
                },
                {
                    "id": 4867,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Double R Lakers 6th",
                    "team1Id": 3278,
                    "team2": "HC Elite White 6th",
                    "team2Id": 3227,
                    "team1Score": "18",
                    "team2Score": "45",
                    "time": "2014-05-04T15:15:00"
                },
                {
                    "id": 4847,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Urbana Hawks 9th",
                    "team1Id": 3261,
                    "team2": "York Raiders 9th",
                    "team2Id": 3258,
                    "team1Score": "33",
                    "team2Score": "83",
                    "time": "2014-05-04T15:15:00"
                },
                {
                    "id": 5910,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Frederick Storm",
                    "team1Id": 4298,
                    "team2": "Columbia Ravens - Held 7th",
                    "team2Id": 3238,
                    "team1Score": "29",
                    "team2Score": "43",
                    "time": "2014-05-04T15:15:00"
                },
                {
                    "id": 4895,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Randelstown Runnin Rebels 7th",
                    "team1Id": 3244,
                    "team2": "Double R Lakers 7th",
                    "team2Id": 3280,
                    "team1Score": "40",
                    "team2Score": "32",
                    "time": "2014-05-04T16:00:00"
                },
                {
                    "id": 4886,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "CC Crush 7th",
                    "team1Id": 3282,
                    "team2": "Columbia Ravens - Paugh 7th",
                    "team2Id": 3239,
                    "team1Score": "39",
                    "team2Score": "59",
                    "time": "2014-05-04T16:00:00"
                },
                {
                    "id": 4858,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "MD Hoopmasters - Neville 11th",
                    "team1Id": 3272,
                    "team2": "CBSA Hoyas 11th",
                    "team2Id": 3292,
                    "team1Score": "44",
                    "team2Score": "48",
                    "time": "2014-05-04T16:15:00"
                },
                {
                    "id": 4848,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "CBSA Hoyas 9th",
                    "team1Id": 3262,
                    "team2": "MD Tar Heels 9th",
                    "team2Id": 3287,
                    "team1Score": "37",
                    "team2Score": "41",
                    "time": "2014-05-04T16:15:00"
                },
                {
                    "id": 4868,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "MD 3D 5th",
                    "team1Id": 3277,
                    "team2": "HC Elite OMalley 5th",
                    "team2Id": 3220,
                    "team1Score": "55",
                    "team2Score": "33",
                    "time": "2014-05-04T16:15:00"
                },
                {
                    "id": 4877,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite - Clark 10th",
                    "team1Id": 3264,
                    "team2": "MD 3D 10th",
                    "team2Id": 3290,
                    "team1Score": "56",
                    "team2Score": "41",
                    "time": "2014-05-04T16:15:00"
                },
                {
                    "id": 4887,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Elite Ballers 10th",
                    "team1Id": 3289,
                    "team2": "Delaware AIM 10th",
                    "team2Id": 3265,
                    "team1Score": "53",
                    "team2Score": "38",
                    "time": "2014-05-04T17:00:00"
                },
                {
                    "id": 4896,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "E-Town Elite 10th",
                    "team1Id": 3266,
                    "team2": "MD Hoopmasters - Woodyard 10th",
                    "team2Id": 3271,
                    "team1Score": "38",
                    "team2Score": "54",
                    "time": "2014-05-04T17:00:00"
                },
                {
                    "id": 4878,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Team AIP 11th",
                    "team1Id": 3273,
                    "team2": "MD Tar Heels 11th",
                    "team2Id": 3291,
                    "team1Score": "59",
                    "team2Score": "41",
                    "time": "2014-05-04T17:15:00"
                },
                {
                    "id": 4869,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens 5th",
                    "team1Id": 3222,
                    "team2": "HC Elite 4th Tookes",
                    "team2Id": 3276,
                    "team1Score": "32",
                    "team2Score": "20",
                    "time": "2014-05-04T17:15:00"
                },
                {
                    "id": 4849,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "E-Town Elite 8th",
                    "team1Id": 3251,
                    "team2": "HC Elite Eudell 8th",
                    "team2Id": 3245,
                    "team1Score": "9",
                    "team2Score": "44",
                    "time": "2014-05-04T17:15:00"
                },
                {
                    "id": 4859,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite Borden 8th",
                    "team1Id": 3246,
                    "team2": "Columbia Ravens 8th",
                    "team2Id": 3247,
                    "team1Score": "31",
                    "team2Score": "35",
                    "time": "2014-05-04T17:15:00"
                },
                {
                    "id": 4860,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "BTA Academy 10th",
                    "team1Id": 3288,
                    "team2": "EC Cobras 10th",
                    "team2Id": 3268,
                    "team1Score": "1",
                    "team2Score": "21",
                    "time": "2014-05-04T18:30:00"
                },
                {
                    "id": 4850,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "MD Tar Heels 9th",
                    "team1Id": 3287,
                    "team2": "Liberty Road Alliance 9th",
                    "team2Id": 3260,
                    "team1Score": "37",
                    "team2Score": "36",
                    "time": "2014-05-04T18:30:00"
                },
                {
                    "id": 4870,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "CBSA Hoyas 11th",
                    "team1Id": 3292,
                    "team2": "HC Elite - Stock 11th",
                    "team2Id": 3269,
                    "team1Score": "42",
                    "team2Score": "55",
                    "time": "2014-05-04T18:30:00"
                },
                {
                    "id": 4912,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HC Elite White 6th",
                    "team1Id": 3227,
                    "team2": "HC Elite Green 6th",
                    "team2Id": 3228,
                    "team1Score": "28",
                    "team2Score": "41",
                    "time": "2014-05-04T18:30:00"
                },
                {
                    "id": 4913,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Randelstown Runnin Rebels 7th",
                    "team1Id": 3244,
                    "team2": "Columbia Ravens - Paugh 7th",
                    "team2Id": 3239,
                    "team1Score": "38",
                    "team2Score": "29",
                    "time": "2014-05-04T19:30:00"
                },
                {
                    "id": 4910,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite 4th Tookes",
                    "team1Id": 3276,
                    "team2": "MD 3D 5th",
                    "team2Id": 3277,
                    "team1Score": "42",
                    "team2Score": "36",
                    "time": "2014-05-04T19:30:00"
                },
                {
                    "id": 4907,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Fairfax Stars 8th",
                    "team1Id": 3286,
                    "team2": "MD Finest 8th",
                    "team2Id": 3284,
                    "team1Score": "35",
                    "team2Score": "31",
                    "time": "2014-05-04T19:30:00"
                },
                {
                    "id": 4909,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite Green- Hollwedel 7th",
                    "team1Id": 3235,
                    "team2": "MD 3D 7th",
                    "team2Id": 3242,
                    "team1Score": "36",
                    "team2Score": "42",
                    "time": "2014-05-04T19:30:00"
                },
                {
                    "id": 4908,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "9th Grade Green 1st Seed",
                    "team1Id": 3304,
                    "team2": "9th Grade White 1st Seed",
                    "team2Id": 3303,
                    "team1Score": "",
                    "team2Score": "",
                    "time": "2014-05-04T20:30:00"
                },
                {
                    "id": 4911,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HS 11th Grade 1st Seed",
                    "team1Id": 3307,
                    "team2": "HS 11th Grade 2nd Seed",
                    "team2Id": 3308,
                    "team1Score": "",
                    "team2Score": "",
                    "time": "2014-05-04T20:30:00"
                },
                {
                    "id": 4914,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HS 10th Grade Green 1st Seed",
                    "team1Id": 3306,
                    "team2": "HS 10th Grade White 1st Seed",
                    "team2Id": 3305,
                    "team1Score": "",
                    "team2Score": "",
                    "time": "2014-05-04T20:30:00"
                }
            ],
            "standings": [
                {
                    "divisionName": "5th Grade - Green",
                    "divisionStandings": [
                        {
                            "teamId": 3275,
                            "teamName": "Severn Elite Gold",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 141,
                            "pointsAgainst": 126,
                            "pointsDiff": 15
                        },
                        {
                            "teamId": 3220,
                            "teamName": "HC Elite OMalley 5th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 196,
                            "pointsAgainst": 191,
                            "pointsDiff": 5
                        },
                        {
                            "teamId": 3277,
                            "teamName": "MD 3D 5th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 156,
                            "pointsAgainst": 132,
                            "pointsDiff": 24
                        },
                        {
                            "teamId": 3222,
                            "teamName": "Columbia Ravens 5th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 147,
                            "pointsAgainst": 124,
                            "pointsDiff": 23
                        },
                        {
                            "teamId": 3224,
                            "teamName": "Team Dedication 5th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 113,
                            "pointsAgainst": 123,
                            "pointsDiff": -10
                        },
                        {
                            "teamId": 4299,
                            "teamName": "D1 Spartans",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        }
                    ]
                },
                {
                    "divisionName": "5th Grade - White",
                    "divisionStandings": [
                        {
                            "teamId": 3276,
                            "teamName": "HC Elite 4th Tookes",
                            "wins": 4,
                            "losses": 1,
                            "winningPct": ".800",
                            "pointsFor": 187,
                            "pointsAgainst": 158,
                            "pointsDiff": 29
                        },
                        {
                            "teamId": 3225,
                            "teamName": "CBSA Hoyas 5th Grade",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 149,
                            "pointsAgainst": 133,
                            "pointsDiff": 16
                        },
                        {
                            "teamId": 3226,
                            "teamName": "Randelstown Runnin Rebels 5th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 108,
                            "pointsAgainst": 155,
                            "pointsDiff": -47
                        },
                        {
                            "teamId": 3223,
                            "teamName": "Up n Coming Clippers 5th",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3221,
                            "teamName": "HC Elite Knisley 5th",
                            "wins": 0,
                            "losses": 5,
                            "winningPct": ".000",
                            "pointsFor": 163,
                            "pointsAgainst": 218,
                            "pointsDiff": -55
                        }
                    ]
                },
                {
                    "divisionName": "6th Grade",
                    "divisionStandings": [
                        {
                            "teamId": 3228,
                            "teamName": "HC Elite Green 6th",
                            "wins": 4,
                            "losses": 1,
                            "winningPct": ".800",
                            "pointsFor": 226,
                            "pointsAgainst": 132,
                            "pointsDiff": 94
                        },
                        {
                            "teamId": 3227,
                            "teamName": "HC Elite White 6th",
                            "wins": 4,
                            "losses": 1,
                            "winningPct": ".800",
                            "pointsFor": 199,
                            "pointsAgainst": 153,
                            "pointsDiff": 46
                        },
                        {
                            "teamId": 3231,
                            "teamName": "Baltimore Beastmode 6th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 120,
                            "pointsAgainst": 118,
                            "pointsDiff": 2
                        },
                        {
                            "teamId": 3229,
                            "teamName": "Columbia Ravens 6th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 128,
                            "pointsAgainst": 155,
                            "pointsDiff": -27
                        },
                        {
                            "teamId": 3278,
                            "teamName": "Double R Lakers 6th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 115,
                            "pointsAgainst": 137,
                            "pointsDiff": -22
                        },
                        {
                            "teamId": 3230,
                            "teamName": "Team Dedication 6th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 100,
                            "pointsAgainst": 144,
                            "pointsDiff": -44
                        },
                        {
                            "teamId": 3232,
                            "teamName": "MD 3D  6th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 117,
                            "pointsAgainst": 166,
                            "pointsDiff": -49
                        }
                    ]
                },
                {
                    "divisionName": "7th Grade - Green",
                    "divisionStandings": [
                        {
                            "teamId": 3244,
                            "teamName": "Randelstown Runnin Rebels 7th",
                            "wins": 5,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 263,
                            "pointsAgainst": 144,
                            "pointsDiff": 119
                        },
                        {
                            "teamId": 3280,
                            "teamName": "Double R Lakers 7th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 173,
                            "pointsAgainst": 126,
                            "pointsDiff": 47
                        },
                        {
                            "teamId": 3239,
                            "teamName": "Columbia Ravens - Paugh 7th",
                            "wins": 3,
                            "losses": 2,
                            "winningPct": ".600",
                            "pointsFor": 224,
                            "pointsAgainst": 177,
                            "pointsDiff": 47
                        },
                        {
                            "teamId": 3281,
                            "teamName": "Liberty Dream 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 154,
                            "pointsAgainst": 157,
                            "pointsDiff": -3
                        },
                        {
                            "teamId": 3283,
                            "teamName": "Spartans 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 122,
                            "pointsAgainst": 161,
                            "pointsDiff": -39
                        },
                        {
                            "teamId": 3241,
                            "teamName": "Team Dedication Blue 7th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 133,
                            "pointsAgainst": 146,
                            "pointsDiff": -13
                        },
                        {
                            "teamId": 4298,
                            "teamName": "Frederick Storm",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 141,
                            "pointsAgainst": 203,
                            "pointsDiff": -62
                        },
                        {
                            "teamId": 3282,
                            "teamName": "CC Crush 7th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 140,
                            "pointsAgainst": 204,
                            "pointsDiff": -64
                        },
                        {
                            "teamId": 3237,
                            "teamName": "Columbia Ravens Chamblee 7th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 132,
                            "pointsAgainst": 194,
                            "pointsDiff": -62
                        }
                    ]
                },
                {
                    "divisionName": "7th Grade - White",
                    "divisionStandings": [
                        {
                            "teamId": 3242,
                            "teamName": "MD 3D 7th",
                            "wins": 4,
                            "losses": 1,
                            "winningPct": ".800",
                            "pointsFor": 244,
                            "pointsAgainst": 197,
                            "pointsDiff": 47
                        },
                        {
                            "teamId": 3240,
                            "teamName": "Team Dedication Gold  7th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 190,
                            "pointsAgainst": 158,
                            "pointsDiff": 32
                        },
                        {
                            "teamId": 3234,
                            "teamName": "HC Elite Phillips 7th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 165,
                            "pointsAgainst": 155,
                            "pointsDiff": 10
                        },
                        {
                            "teamId": 3235,
                            "teamName": "HC Elite Green- Hollwedel 7th",
                            "wins": 3,
                            "losses": 2,
                            "winningPct": ".600",
                            "pointsFor": 237,
                            "pointsAgainst": 180,
                            "pointsDiff": 57
                        },
                        {
                            "teamId": 3279,
                            "teamName": "Laurel Stallions 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 177,
                            "pointsAgainst": 185,
                            "pointsDiff": -8
                        },
                        {
                            "teamId": 3236,
                            "teamName": "HC Elite White - Hollwedel 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 135,
                            "pointsAgainst": 159,
                            "pointsDiff": -24
                        },
                        {
                            "teamId": 3238,
                            "teamName": "Columbia Ravens - Held 7th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 141,
                            "pointsAgainst": 171,
                            "pointsDiff": -30
                        },
                        {
                            "teamId": 3243,
                            "teamName": "CBSA Hoyas  7th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 157,
                            "pointsAgainst": 211,
                            "pointsDiff": -54
                        }
                    ]
                },
                {
                    "divisionName": "8th Grade - Green",
                    "divisionStandings": [
                        {
                            "teamId": 3286,
                            "teamName": "Fairfax Stars 8th",
                            "wins": 5,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 280,
                            "pointsAgainst": 112,
                            "pointsDiff": 168
                        },
                        {
                            "teamId": 3247,
                            "teamName": "Columbia Ravens 8th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 186,
                            "pointsAgainst": 112,
                            "pointsDiff": 74
                        },
                        {
                            "teamId": 3246,
                            "teamName": "HC Elite Borden 8th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 188,
                            "pointsAgainst": 108,
                            "pointsDiff": 80
                        },
                        {
                            "teamId": 3250,
                            "teamName": "MD Shockers  8th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 61,
                            "pointsAgainst": 266,
                            "pointsDiff": -205
                        },
                        {
                            "teamId": 3252,
                            "teamName": "MD Wildkatz 8th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 86,
                            "pointsAgainst": 199,
                            "pointsDiff": -113
                        }
                    ]
                },
                {
                    "divisionName": "8th Grade - White",
                    "divisionStandings": [
                        {
                            "teamId": 3284,
                            "teamName": "MD Finest 8th",
                            "wins": 4,
                            "losses": 1,
                            "winningPct": ".800",
                            "pointsFor": 227,
                            "pointsAgainst": 168,
                            "pointsDiff": 59
                        },
                        {
                            "teamId": 3245,
                            "teamName": "HC Elite Eudell 8th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 167,
                            "pointsAgainst": 118,
                            "pointsDiff": 49
                        },
                        {
                            "teamId": 3248,
                            "teamName": "Team Dedication 8th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 157,
                            "pointsAgainst": 160,
                            "pointsDiff": -3
                        },
                        {
                            "teamId": 3285,
                            "teamName": "Double R Lakers 8th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 170,
                            "pointsAgainst": 162,
                            "pointsDiff": 8
                        },
                        {
                            "teamId": 3251,
                            "teamName": "E-Town Elite 8th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 74,
                            "pointsAgainst": 191,
                            "pointsDiff": -117
                        }
                    ]
                },
                {
                    "divisionName": "9th Grade - Green",
                    "divisionStandings": [
                        {
                            "teamId": 3253,
                            "teamName": "HC Elite - Tringali 9th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 194,
                            "pointsAgainst": 84,
                            "pointsDiff": 110
                        },
                        {
                            "teamId": 3287,
                            "teamName": "MD Tar Heels 9th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 156,
                            "pointsAgainst": 152,
                            "pointsDiff": 4
                        },
                        {
                            "teamId": 3255,
                            "teamName": "MD Hoopmasters 9th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 177,
                            "pointsAgainst": 186,
                            "pointsDiff": -9
                        },
                        {
                            "teamId": 3262,
                            "teamName": "CBSA Hoyas 9th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 181,
                            "pointsAgainst": 194,
                            "pointsDiff": -13
                        },
                        {
                            "teamId": 3260,
                            "teamName": "Liberty Road Alliance 9th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 136,
                            "pointsAgainst": 159,
                            "pointsDiff": -23
                        },
                        {
                            "teamId": 3257,
                            "teamName": "Raptors 9th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 138,
                            "pointsAgainst": 207,
                            "pointsDiff": -69
                        }
                    ]
                },
                {
                    "divisionName": "9th Grade - White",
                    "divisionStandings": [
                        {
                            "teamId": 3258,
                            "teamName": "York Raiders 9th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 247,
                            "pointsAgainst": 170,
                            "pointsDiff": 77
                        },
                        {
                            "teamId": 3256,
                            "teamName": "Liberty Basketball 9th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 228,
                            "pointsAgainst": 158,
                            "pointsDiff": 70
                        },
                        {
                            "teamId": 3259,
                            "teamName": "AIP  9th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 207,
                            "pointsAgainst": 186,
                            "pointsDiff": 21
                        },
                        {
                            "teamId": 3254,
                            "teamName": "HC Elite - Thai 9th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 180,
                            "pointsAgainst": 204,
                            "pointsDiff": -24
                        },
                        {
                            "teamId": 3261,
                            "teamName": "Urbana Hawks 9th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 133,
                            "pointsAgainst": 277,
                            "pointsDiff": -144
                        }
                    ]
                },
                {
                    "divisionName": "HS 10th Grade - Green",
                    "divisionStandings": [
                        {
                            "teamId": 3264,
                            "teamName": "HC Elite - Clark 10th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 222,
                            "pointsAgainst": 143,
                            "pointsDiff": 79
                        },
                        {
                            "teamId": 3268,
                            "teamName": "EC Cobras 10th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 131,
                            "pointsAgainst": 123,
                            "pointsDiff": 8
                        },
                        {
                            "teamId": 3290,
                            "teamName": "MD 3D 10th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 201,
                            "pointsAgainst": 177,
                            "pointsDiff": 24
                        },
                        {
                            "teamId": 3288,
                            "teamName": "BTA Academy 10th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 126,
                            "pointsAgainst": 175,
                            "pointsDiff": -49
                        },
                        {
                            "teamId": 3267,
                            "teamName": "Team Ice 10th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 145,
                            "pointsAgainst": 207,
                            "pointsDiff": -62
                        }
                    ]
                },
                {
                    "divisionName": "HS 10th Grade - White",
                    "divisionStandings": [
                        {
                            "teamId": 3263,
                            "teamName": "HC Elite Stefan 10th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 290,
                            "pointsAgainst": 171,
                            "pointsDiff": 119
                        },
                        {
                            "teamId": 3289,
                            "teamName": "Elite Ballers 10th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 218,
                            "pointsAgainst": 169,
                            "pointsDiff": 49
                        },
                        {
                            "teamId": 3265,
                            "teamName": "Delaware AIM 10th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 148,
                            "pointsAgainst": 190,
                            "pointsDiff": -42
                        },
                        {
                            "teamId": 3271,
                            "teamName": "MD Hoopmasters - Woodyard 10th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 180,
                            "pointsAgainst": 212,
                            "pointsDiff": -32
                        },
                        {
                            "teamId": 3266,
                            "teamName": "E-Town Elite 10th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 131,
                            "pointsAgainst": 225,
                            "pointsDiff": -94
                        }
                    ]
                },
                {
                    "divisionName": "HS 11th Grade",
                    "divisionStandings": [
                        {
                            "teamId": 3273,
                            "teamName": "Team AIP 11th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 276,
                            "pointsAgainst": 183,
                            "pointsDiff": 93
                        },
                        {
                            "teamId": 3270,
                            "teamName": "HC Elite - Dan Nap 11th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 231,
                            "pointsAgainst": 179,
                            "pointsDiff": 52
                        },
                        {
                            "teamId": 3274,
                            "teamName": "HC Elite - Stefan 11th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 251,
                            "pointsAgainst": 229,
                            "pointsDiff": 22
                        },
                        {
                            "teamId": 3292,
                            "teamName": "CBSA Hoyas 11th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 205,
                            "pointsAgainst": 223,
                            "pointsDiff": -18
                        },
                        {
                            "teamId": 3269,
                            "teamName": "HC Elite - Stock 11th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 183,
                            "pointsAgainst": 220,
                            "pointsDiff": -37
                        },
                        {
                            "teamId": 3272,
                            "teamName": "MD Hoopmasters - Neville 11th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 163,
                            "pointsAgainst": 224,
                            "pointsDiff": -61
                        },
                        {
                            "teamId": 3291,
                            "teamName": "MD Tar Heels 11th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 167,
                            "pointsAgainst": 218,
                            "pointsDiff": -51
                        }
                    ]
                },
                {
                    "divisionName": "Sunday Championships",
                    "divisionStandings": [
                        {
                            "teamId": 3294,
                            "teamName": "5th Grade Green 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3293,
                            "teamName": "5th Grade White 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3295,
                            "teamName": "6th Grade 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3296,
                            "teamName": "6th Grade 2nd Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3299,
                            "teamName": "7th Grade Green 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3300,
                            "teamName": "7th Grade Green 2nd Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3297,
                            "teamName": "7th Grade White 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3298,
                            "teamName": "7th Grade White 2nd Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3301,
                            "teamName": "8th Grade Green 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3302,
                            "teamName": "8th Grade White 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3304,
                            "teamName": "9th Grade Green 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3303,
                            "teamName": "9th Grade White 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3306,
                            "teamName": "HS 10th Grade Green 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3305,
                            "teamName": "HS 10th Grade White 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3307,
                            "teamName": "HS 11th Grade 1st Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 3308,
                            "teamName": "HS 11th Grade 2nd Seed",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        }
                    ]
                }
            ]
        };
        function getLeagues() {
            return leagues;
        }
        function getLeagueData() {
            return leagueData;
        }
        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData
        }
    }
})();
