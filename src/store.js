import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Action } from './actions';

function removeThe(title) {
  return title.substring(0, 4) === "The " ? title.substring(4) : title;
}

function reducer(state, action) {
  switch (action.type) {
    case Action.ByTitle:
      return {
        ...state,
        books: [...state.books].sort((a, b) => removeThe(a.title) >= removeThe(b.title) ? 1 : -1)
      }
    case Action.ByTitleDescend:
      return {
        ...state,
        books: [...state.books].sort((a, b) => removeThe(a.title) <= removeThe(b.title) ? 1 : -1)
      }
    case Action.Randomize:
      return {
        ...state,
        books: [...state.books]
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
      }
    case Action.ByAuthorDescend:
      return {
        ...state,
        books: [...state.books].sort((a, b) => (a.author.split(" ").pop()
          <= b.author.split(" ").pop()) ? 1 : -1)
      }
    case Action.ByAuthor: {
      return {
        ...state,
        books: [...state.books].sort((a, b) => (a.author.split(" ").pop()
          >= b.author.split(" ").pop()) ? 1 : -1)
      }
    }
    case Action.ByRatingDescend:
      return {
        ...state,
        books: [...state.books].sort((a, b) => (a.rating <= b.rating) ? 1 : -1),
      };
    case Action.ByRatingAscend:
      return {
        ...state,
        books: [...state.books].sort((a, b) => (a.rating >= b.rating) ? 1 : -1),
      };
    case Action.ByYearAscend:
      return {
        ...state,
        books: [...state.books].sort((a, b) => a.year >= b.year ? 1 : -1),
      }
    case Action.ByYearDescend:
      return {
        ...state,
        books: [...state.books].sort((a, b) => a.year <= b.year ? 1 : -1),
      }
    default:
      return state;
  }

}

const initialState = {
  books: [
    {
      "title": "The Shadow Grid Returns (Dragon Stone Saga #7)",
      "author": "Kristian Alva",
      "rating": 4.45,
      "year": 2016
    },
    {
      "title": "The Balborite Curse (Dragon Stone Saga, #4)",
      "author": "Kristian Alva",
      "rating": 4.14,
      "year": 2013
    },
    {
      "title": "Send Me Their Souls (Bring Me Their Hearts, #3)",
      "author": "Sara Wolf",
      "rating": 3.88,
      "year": 2020
    },
    {
      "title": "Find Me Their Bones (Bring Me Their Hearts, #2)",
      "author": "Sara Wolf",
      "rating": 4.11,
      "year": 2019
    },
    {
      "title": "Bring Me Their Hearts (Bring Me Their Hearts, #1)",
      "author": "Sara Wolf",
      "rating": 4.03,
      "year": 2018
    },
    {
      "title": "DragonSpell (DragonKeeper Chronicles, #1)",
      "author": "Donita K. Paul",
      "rating": 3.89,
      "year": 2004
    },
    {
      "title": "The Sorceress and the Cygnet (Cygnet, #1)",
      "author": "Patricia A. McKillip",
      "rating": 3.91,
      "year": 1990
    },
    {
      "title": "Liberator (Dragons of Starlight, #4)",
      "author": "Beverly Davis",
      "rating": 4.18,
      "year": 2012
    },
    {
      "title": "Diviner (Dragons of Starlight, #3)",
      "author": "Beverly Davis",
      "rating": 4.06,
      "year": 2011
    },
    {
      "title": "Warrior (Dragons of Starlight, #2)",
      "author": "Beverly Davis",
      "rating": 4.01,
      "year": 2010
    },
    {
      "title": "Starlighter (Dragons of Starlight, #1)",
      "author": "Beverly Davis",
      "rating": 3.79,
      "year": 2010
    },
    {
      "title": "Incarnate (Newsoul, #1)",
      "author": "Jodi Meadows",
      "rating": 3.73,
      "year": 2012
    },
    {
      "title": "Inferno (Talon, #5)",
      "author": "Julie Kagawa",
      "rating": 4.1,
      "year": 2018
    },
    {
      "title": "Legion (Talon, #4)",
      "author": "Julie Kagawa",
      "rating": 4.06,
      "year": 2017
    },
    {
      "title": "Soldier (Talon, #3)",
      "author": "Julie Kagawa",
      "rating": 4.04,
      "year": 2016
    },
    {
      "title": "Rogue (Talon, #2)",
      "author": "Julie Kagawa",
      "rating": 3.89,
      "year": 2015
    },
    {
      "title": "Talon (Talon, #1)",
      "author": "Julie Kagawa",
      "rating": 3.75,
      "year": 2014
    },
    {
      "title": "DragonLight (DragonKeeper Chronicles, #5)",
      "author": "Donita K. Paul",
      "rating": 4.25,
      "year": 2008
    },
    {
      "title": "DragonFire (DragonKeeper Chronicles, #4)",
      "author": "Donita K. Paul",
      "rating": 4.2,
      "year": 2007
    },
    {
      "title": "DragonKnight (DragonKeeper Chronicles, #3)",
      "author": "Donita K. Paul",
      "rating": 4.2,
      "year": 2006
    },
    {
      "title": "DragonQuest (DragonKeeper Chronicles, #2)",
      "author": "Donita K. Paul",
      "rating": 4.15,
      "year": 2005
    },
    {
      "title": "The Cygnet and the Firebird (Cygnet, #2)",
      "author": "Patricia A. McKillip",
      "rating": 3.98,
      "year": 1993
    },
    {
      "title": "When Villains Rise (Market of Monsters, #3)",
      "author": "Rebecca Schaeffer",
      "rating": 4.24,
      "year": 2020
    },
    {
      "title": "Only Ashes Remain (Market of Monsters, #2)",
      "author": "Rebecca Schaeffer",
      "rating": 4.19,
      "year": 2019
    },
    {
      "title": "Not Even Bones (Market of Monsters, #1)",
      "author": "Rebecca Schaeffer",
      "rating": 4.15,
      "year": 2018
    },
    {
      "title": "Infinite (Newsoul, #3)",
      "author": "Jodi Meadows",
      "rating": 4.03,
      "year": 2014
    },
    {
      "title": "Asunder (Newsoul, #2)",
      "author": "Jodi Meadows",
      "rating": 3.96,
      "year": 2013
    },
    {
      "title": "The Heart Forger (The Bone Witch, #2)",
      "author": "Rin Chupeco",
      "rating": 4.23,
      "year": 2018
    },
    {
      "title": "Dragon's Keep (Wilde Island Chronicles, #1)",
      "author": "Janet Lee Carey",
      "rating": 3.65,
      "year": 2007
    },
    {
      "title": "Warrior (Doppelganger, #1)",
      "author": "Marie Brennan",
      "rating": 3.87,
      "year": 2006
    },
    {
      "title": "The Dreadful Tale of Prosper Redding (Prosper Redding, #1)",
      "author": "Alexandra Bracken",
      "rating": 3.86,
      "year": 2017
    },
    {
      "title": "Tithe (Modern Faerie Tales, #1)",
      "author": "Holly Black",
      "rating": 3.7,
      "year": 2002
    },
    {
      "title": "Forestborn (Forestborn, #1)",
      "author": "Elayne Audrey Becker",
      "rating": 3.93,
      "year": 2021
    },
    {
      "title": "Six of Crows (Six of Crows, #1)",
      "author": "Leigh Bardugo",
      "rating": 4.49,
      "year": 2015
    },
    {
      "title": "Bloodwitch (The Maeve’ra, #1)",
      "author": "Amelia Atwater-Rhodes",
      "rating": 3.6,
      "year": 2014
    },
    {
      "title": "Return of the Dragon Riders (Dragon Stone Saga #2)",
      "author": "Kristian Alva",
      "rating": 3.82,
      "year": 2011
    },
    {
      "title": "The Replacement",
      "author": "Brenna Yovanoff",
      "rating": 3.55,
      "year": 2010
    },
    {
      "title": "The Waking Forest",
      "author": "Alyssa Wees",
      "rating": 3.38,
      "year": 2019
    },
    {
      "title": "Tooth and Claw",
      "author": "Jo Walton",
      "rating": 3.87,
      "year": 2003
    },
    {
      "title": "Bright Star",
      "author": "Erin Swan",
      "rating": 3.73,
      "year": 2019
    },
    {
      "title": "Dracula",
      "author": "Bram Stoker",
      "rating": 4.01,
      "year": 1897
    },
    {
      "title": "Fire with Fire",
      "author": "Destiny Soria",
      "rating": 3.8,
      "year": 2021
    },
    {
      "title": "The Ocean Above Me",
      "author": "Kevin Sites",
      "rating": 4.2,
      "year": 2023
    },
    {
      "title": "Frankenstein: The 1818 Text",
      "author": "Mary Wollstonecraft Shelley",
      "rating": 3.86,
      "year": 1818
    },
    {
      "title": "The Color of Dragons",
      "author": "R.A. Salvatore",
      "rating": 3.55,
      "year": 2021
    },
    {
      "title": "I Am Ozzy",
      "author": "Ozzy Osbourne",
      "rating": 4.08,
      "year": 2009
    },
    {
      "title": "Bliss (Crestview Academy, #1)",
      "author": "Lauren Myracle",
      "rating": 3.38,
      "year": 2008
    },
    {
      "title": "A Prophecy of Wings",
      "author": "Jane  McGarry",
      "rating": 3.97,
      "year": 2021
    },
    {
      "title": "The One",
      "author": "John Marrs",
      "rating": 4.12,
      "year": 2016
    },
    {
      "title": "Wicked: The Life and Times of the Wicked Witch of the West (The Wicked Years, #1)",
      "author": "Gregory Maguire",
      "rating": 3.54,
      "year": 1995
    },
    {
      "title": "The Onion Girl (Newford, #8)",
      "author": "Charles de Lint",
      "rating": 4.16,
      "year": 2001
    },
    {
      "title": "Warrior of the Wild",
      "author": "Tricia Levenseller",
      "rating": 3.97,
      "year": 2019
    },
    {
      "title": "The House in the Cerulean Sea",
      "author": "T.J. Klune",
      "rating": 4.43,
      "year": 2020
    },
    {
      "title": "Horror Show",
      "author": "Greg Kihn",
      "rating": 3.65,
      "year": 1996
    },
    {
      "title": "Quest for Celestia: A Reimagining of The Pilgrim's Progress",
      "author": "Steven James",
      "rating": 4.34,
      "year": 2006
    },
    {
      "title": "Alliance",
      "author": "Alfred J. Hunt",
      "rating": 4.5,
      "year": 2020
    },
    {
      "title": "A Creature of Moonlight",
      "author": "Rebecca   Hahn",
      "rating": 3.61,
      "year": 2014
    },
    {
      "title": "Stronger Than a Bronze Dragon",
      "author": "Mary Fan",
      "rating": 3.49,
      "year": 2019
    },
    {
      "title": "American Psycho",
      "author": "Bret Easton Ellis",
      "rating": 3.81,
      "year": 1991
    },
    {
      "title": "Fire & Heist",
      "author": "Sarah Beth Durst",
      "rating": 3.44,
      "year": 2018
    },
    {
      "title": "Journey Into Darkness: The Unauthorized History of Kane",
      "author": "Michael Chiappetta",
      "rating": 3.57,
      "year": 2005
    },
    {
      "title": "The Serpent Mage",
      "author": "Greg Bear",
      "rating": 4.01,
      "year": 1984
    },
    {
      "title": "Watership Down (Watership Down, #1)",
      "author": "Richard  Adams",
      "rating": 4.08,
      "year": 1972
    },
    {
      "title": "Requiem of the Crazies: Part III (Requiem of the Crazies, #3)",
      "author": "Rusty Cage",
      "rating": 3.5,
      "year": 2021
    },
    {
      "title": "Requiem of the Crazies: Part II",
      "author": "Rusty Cage",
      "rating": 4.43,
      "year": 2020
    },
    {
      "title": "Requiem of the Crazies: Part I",
      "author": "Rusty Cage",
      "rating": 4.29,
      "year": 2019
    },
    {
      "title": "Dragon's Bait",
      "author": "Vivian Vande Velde",
      "rating": 3.93,
      "year": 1992
    },
    {
      "title": "Among the Beasts & Briars",
      "author": "Ashley Poston",
      "rating": 3.78,
      "year": 2020
    },
    {
      "title": "Wildbound (Forestborn, #2)",
      "author": "Elayne Audrey Becker",
      "rating": 4.09,
      "year": 2022
    },
    {
      "title": "Blood Heir (Blood Heir Trilogy, #1)",
      "author": "Amélie Wen Zhao",
      "rating": 3.83,
      "year": 2019
    },
    {
      "title": "Red Tigress (Blood Heir Trilogy, #2)",
      "author": "Amélie Wen Zhao",
      "rating": 3.95,
      "year": 2021
    },
    {
      "title": "Crimson Reign (Blood Heir Trilogy, #3)",
      "author": "Amélie Wen Zhao",
      "rating": 3.96,
      "year": 2022
    },
    {
      "title": "Mask of Shadows (Mask of Shadows, #1)",
      "author": "Linsey Miller",
      "rating": 3.68,
      "year": 2017
    },
    {
      "title": "Jurassic Park (Jurassic Park, #1)",
      "author": "Michael Crichton",
      "rating": 4.09,
      "year": 1990
    },
    {
      "title": "I Hunt Killers (I Hunt Killers, #1)",
      "author": "Barry Lyga",
      "rating": 4.01,
      "year": 2012
    },
    {
      "title": "The Dragon's Price (Transference, #1)",
      "author": "Bethany Wiggins",
      "rating": 3.83,
      "year": 2017
    },
    {
      "title": "The Seer and the Sword",
      "author": "Victoria Hanley",
      "rating": 4.12,
      "year": 2000
    },
    {
      "title": "Blue is for Nightmares (Blue is for Nightmares, #1)",
      "author": "Laurie Faria Stolarz",
      "rating": 3.82,
      "year": 2003
    },
    {
      "title": "Witch (Wicked, #1)",
      "author": "Nancy Holder",
      "rating": 3.35,
      "year": 2002
    },
    {
      "title": "Fire in Frost (Crystal Frost, #1)",
      "author": "Alicia Rades",
      "rating": 3.84,
      "year": 2015
    },
    {
      "title": "Book of Shadows (Sweep, #1)",
      "author": "Cate Tiernan",
      "rating": 4.03,
      "year": 2001
    },
    {
      "title": "Secret Vampire (Night World, #1)",
      "author": "L.J. Smith",
      "rating": 3.72,
      "year": 1996
    },
    {
      "title": "The Hunter's Moon (The Chronicles of Faerie, #1)",
      "author": "O.R. Melling",
      "rating": 3.82,
      "year": 1993
    },
    {
      "title": "Seraphina (Seraphina, #1)",
      "author": "Rachel Hartman",
      "rating": 3.94,
      "year": 2012
    },
    {
      "title": "Switched (Trylle, #1)",
      "author": "Amanda Hocking",
      "rating": 3.87,
      "year": 2010
    },
    {
      "title": "A Shadow of All Night Falling (Dread Empire, #1)",
      "author": "Glen Cook",
      "rating": 3.64,
      "year": 1979
    },
    {
      "title": "The Sight (The Sight, #1)",
      "author": "David Clement-Davies",
      "rating": 4.13,
      "year": 2001
    },
    {
      "title": "Spindle Fire (Spindle Fire #1)",
      "author": "Lexa Hillyer",
      "rating": 3.43,
      "year": 2017
    },
    {
      "title": "The Magicians (The Magicians, #1)",
      "author": "Lev Grossman",
      "rating": 3.53,
      "year": 2009
    },
    {
      "title": "Seasons of the Storm (Seasons of the Storm, #1)",
      "author": "Elle Cosimano",
      "rating": 3.49,
      "year": 2020
    },
    {
      "title": "The Endless Skies",
      "author": "Shannon Price",
      "rating": 3.54,
      "year": 2021
    },
    {
      "title": "Snow Like Ashes (Snow Like Ashes, #1)",
      "author": "Sara Raasch",
      "rating": 3.88,
      "year": 2014
    },
    {
      "title": "Dark Lord (Falconfar Saga, #1)",
      "author": "Ed Greenwood",
      "rating": 3.22,
      "year": 2007
    },
    {
      "title": "Dark Breaks the Dawn (Dark Breaks the Dawn Duology, #1)",
      "author": "Sara B. Larson",
      "rating": 3.6,
      "year": 2017
    },
    {
      "title": "Fate of Flames (Effigies, #1)",
      "author": "Sarah Raughley",
      "rating": 3.65,
      "year": 2016
    },
    {
      "title": "Dragon's Blood (Pit Dragon Chronicles, #1)",
      "author": "Jane Yolen",
      "rating": 4.01,
      "year": 1982
    },
    {
      "title": "Amber & Dusk (Amber & Dusk, #1)",
      "author": "Lyra Selene",
      "rating": 3.51,
      "year": 2018
    },
    {
      "title": "Birth of the Firebringer (Firebringer, #1)",
      "author": "Meredith Ann Pierce",
      "rating": 4.15,
      "year": 1985
    },
    {
      "title": "The Vanishing Sculptor (Valley of the Dragons, #1)",
      "author": "Donita K. Paul",
      "rating": 3.94,
      "year": 2009
    },
    {
      "title": "Furyborn (Empirium, #1)",
      "author": "Claire Legrand",
      "rating": 3.8,
      "year": 2018
    },
    {
      "title": "Dexter Is Delicious (Dexter, #5)",
      "author": "Jeff Lindsay",
      "rating": 3.8,
      "year": 2010
    },
    {
      "title": "A Tale of Witchcraft... (A Tale of Magic, #2)",
      "author": "Chris Colfer",
      "rating": 4.4,
      "year": 2020
    },
    {
      "title": "Prophecy (The Dragon King Chronicles, #1)",
      "author": "Ellen Oh",
      "rating": 3.49,
      "year": 2013
    },
    {
      "title": "Rhapsody: Child of Blood (Symphony of Ages, #1)",
      "author": "Elizabeth Haydon",
      "rating": 3.97,
      "year": 1999
    },
    {
      "title": "Blade of Secrets (Bladesmith, #1)",
      "author": "Tricia Levenseller",
      "rating": 3.99,
      "year": 2021
    },
    {
      "title": "Dragonflight (Dragonriders of Pern, #1)",
      "author": "Anne McCaffrey",
      "rating": 4.09,
      "year": 1968
    },
    {
      "title": "The Secret Country (The Secret Country, #1)",
      "author": "Pamela Dean",
      "rating": 3.6,
      "year": 1985
    },
    {
      "title": "The Hollow (The Hollow, #1)",
      "author": "Jessica Verday",
      "rating": 3.74,
      "year": 2009
    },
    {
      "title": "Interview with the Vampire (The Vampire Chronicles, #1)",
      "author": "Anne Rice",
      "rating": 4.02,
      "year": 1976
    },
    {
      "title": "Dragon Champion (Age of Fire, #1)",
      "author": "E.E. Knight",
      "rating": 3.98,
      "year": 2005
    },
    {
      "title": "Kingdom of the Wicked (Kingdom of the Wicked, #1)",
      "author": "Kerri Maniscalco",
      "rating": 3.92,
      "year": 2020
    },
    {
      "title": "Bloodtraitor (The Maeve’ra, #3)",
      "author": "Amelia Atwater-Rhodes",
      "rating": 3.82,
      "year": 2016
    },
    {
      "title": "Bloodkin (The Maeve’ra, #2)",
      "author": "Amelia Atwater-Rhodes",
      "rating": 3.78,
      "year": 2015
    },
    {
      "title": "The Light of the Oracle",
      "author": "Victoria Hanley",
      "rating": 3.97,
      "year": 2004
    },
    {
      "title": "The Healer's Keep",
      "author": "Victoria Hanley",
      "rating": 3.79,
      "year": 2002
    },
    {
      "title": "Ironside (Modern Faerie Tales, #3)",
      "author": "Holly Black",
      "rating": 4.01,
      "year": 2007
    },
    {
      "title": "Valiant (Modern Faerie Tales, #2)",
      "author": "Holly Black",
      "rating": 3.83,
      "year": 2005
    },
    {
      "title": "The Lost World (Jurassic Park, #2)",
      "author": "Michael Crichton",
      "rating": 3.84,
      "year": 1995
    },
    {
      "title": "Rule of Wolves (King of Scars, #2)",
      "author": "Leigh Bardugo",
      "rating": 4.37,
      "year": 2021
    },
    {
      "title": "King of Scars (King of Scars, #1)",
      "author": "Leigh Bardugo",
      "rating": 4.17,
      "year": 2019
    },
    {
      "title": "Siege and Storm (The Shadow and Bone Trilogy, #2)",
      "author": "Leigh Bardugo",
      "rating": 3.83,
      "year": 2013
    },
    {
      "title": "Shadow and Bone (The Shadow and Bone Trilogy, #1)",
      "author": "Leigh Bardugo",
      "rating": 3.94,
      "year": 2012
    },
    {
      "title": "Across the Void",
      "author": "S.K. Vaughn",
      "rating": 3.37,
      "year": 2019
    },
    {
      "title": "Johnny the Homicidal Maniac: Director's Cut",
      "author": "Jhonen Vásquez",
      "rating": 4.34,
      "year": 1997
    },
    {
      "title": "Dexter",
      "author": "Jeffry P. Lindsay",
      "rating": 3.45,
      "year": 2014
    },
    {
      "title": "Dearly Devoted Dexter (Dexter, #2)",
      "author": "Jeff Lindsay",
      "rating": 3.86,
      "year": 2005
    },
    {
      "title": "Dexter By Design (Dexter, #4)",
      "author": "Jeff Lindsay",
      "rating": 3.76,
      "year": 2008
    },
    {
      "title": "Dexter in the Dark (Dexter, #3)",
      "author": "Jeff Lindsay",
      "rating": 3.56,
      "year": 2006
    },
    {
      "title": "Darkly Dreaming Dexter (Dexter, #1)",
      "author": "Jeff Lindsay",
      "rating": 3.9,
      "year": 2004
    },
    {
      "title": "Rubber Soul (Dust Bin Bob #1)",
      "author": "Greg Kihn",
      "rating": 3.47,
      "year": 2013
    },
    {
      "title": "Warriors #3: Forest of Secrets (Warriors: The Prophecies Begin)",
      "author": "Erin Hunter",
      "rating": 4.42,
      "year": 2003
    },
    {
      "title": "Warriors #1: Into the Wild (Warriors: The Prophecies Begin)",
      "author": "Erin Hunter",
      "rating": 4.31,
      "year": 2003
    },
    {
      "title": "Warriors #2: Fire and Ice (Warriors: The Prophecies Begin)",
      "author": "Erin Hunter",
      "rating": 4.37,
      "year": 2003
    },
    {
      "title": "Warriors #6: The Darkest Hour (Warriors: The Prophecies Begin)",
      "author": "Erin Hunter",
      "rating": 4.54,
      "year": 2004
    },
    {
      "title": "Warriors #5: A Dangerous Path (Warriors: The Prophecies Begin)",
      "author": "Erin Hunter",
      "rating": 4.44,
      "year": 2004
    },
    {
      "title": "Warriors #4: Rising Storm (Warriors: The Prophecies Begin)",
      "author": "Erin Hunter",
      "rating": 4.4,
      "year": 2004
    },
    {
      "title": "A Tale of Magic... (A Tale of Magic, #1)",
      "author": "Chris Colfer",
      "rating": 4.26,
      "year": 2019
    },
    {
      "title": "The Bone Witch (The Bone Witch, #1)",
      "author": "Rin Chupeco",
      "rating": 3.7,
      "year": 2017
    },
    {
      "title": "City of Screams",
      "author": "John Brindley",
      "rating": 3.21,
      "year": 2009
    },
    {
      "title": "The Rule of Claw (The Rule of Claw, #1)",
      "author": "John Brindley",
      "rating": 3.32,
      "year": 2008
    },
    {
      "title": "Witchborn",
      "author": "Nicholas Bowling",
      "rating": 3.23,
      "year": 2017
    },
    {
      "title": "Nightblood (Frostblood Saga, #3)",
      "author": "Elly Blake",
      "rating": 4.05,
      "year": 2018
    },
    {
      "title": "Fireblood (Frostblood Saga, #2)",
      "author": "Elly Blake",
      "rating": 4.06,
      "year": 2017
    },
    {
      "title": "Frostblood (Frostblood Saga, #1)",
      "author": "Elly Blake",
      "rating": 3.84,
      "year": 2017
    },
    {
      "title": "The Infinity Concerto",
      "author": "Greg Bear",
      "rating": 3.88,
      "year": 1984
    },
    {
      "title": "The Diving Bell and the Butterfly",
      "author": "Jean-Dominique Bauby",
      "rating": 3.98,
      "year": 1997
    },
    {
      "title": "Dragon Stones (Dragon Stone Saga #1)",
      "author": "Kristian Alva",
      "rating": 3.62,
      "year": 2011
    },
    {
      "title": "With The Beatles: The Historic Photographs Of Dezo Hoffmann (Op91961)",
      "author": "Dezo Hoffmann",
      "rating": 4.05,
      "year": 1982
    },
    {
      "title": "The Beatles",
      "author": "Igloo Books",
      "rating": 3.68,
      "year": 2018
    },
    {
      "title": "The Beatles: The BBC Archives: 1962-1970",
      "author": "Kevin Howlett",
      "rating": 4.22,
      "year": 2013
    },
    {
      "title": "The Beatles: The definitive guide for all Beatles fans!",
      "author": "Kim Aitken",
      "rating": 4,
      "year": 2013
    },
    {
      "title": "A Photographic History of the Beatles (A Photo History)",
      "author": "John Dunne",
      "rating": 3.97,
      "year": 2010
    },
    {
      "title": "The Beatles: the Ultimate Album-by-Album Guide",
      "author": "Jann S. Wenner",
      "rating": 4.27,
      "year": 2011
    },
    {
      "title": "Beatles: Then There Was Music",
      "author": "Tim Hill",
      "rating": 4.24,
      "year": 2009
    },
    {
      "title": "The Beatles: Unseen Archives",
      "author": "Tim Hill",
      "rating": 4.07,
      "year": 2000
    },
    {
      "title": "The Complete Beatles Recording Sessions: The Official Story of the Abbey Road Years 1962-1970",
      "author": "Mark Lewisohn",
      "rating": 4.47,
      "year": 1988
    },
    {
      "title": "Blackbird Singing: Poems and Lyrics, 1965-1999",
      "author": "Paul McCartney",
      "rating": 3.89,
      "year": 2001
    },
    {
      "title": "A Hard Day's Write: The Stories Behind Every Beatles Song",
      "author": "Steve   Turner",
      "rating": 4.18,
      "year": 1994
    },
    {
      "title": "Paul McCartney: A Life",
      "author": "Peter Ames Carlin",
      "rating": 3.89,
      "year": 2009
    },
    {
      "title": "100 Best Beatles Songs: A Passionate Fan's Guide",
      "author": "Stephen J. Spignesi",
      "rating": 4.08,
      "year": 2009
    },
    {
      "title": "The Beatles in America, The Stories, The Scene, 50 Years On",
      "author": "Spencer  Leigh",
      "rating": 4.19,
      "year": 2013
    },
    {
      "title": "Shout! The Beatles in Their Generation",
      "author": "Philip Norman",
      "rating": 4.03,
      "year": 1981
    },
    {
      "title": "The Lyrics: 1956 to the Present",
      "author": "Paul McCartney",
      "rating": 4.61,
      "year": 2021
    },
    {
      "title": "Fab: An Intimate Life of Paul McCartney",
      "author": "Howard Sounes",
      "rating": 3.8,
      "year": 2010
    },
    {
      "title": "Paul McCartney: The Life",
      "author": "Philip Norman",
      "rating": 4.13,
      "year": 2016
    },
    {
      "title": "The Writings of John Lennon: In His Own Write & A Spaniard in the Works",
      "author": "John Lennon",
      "rating": 3.74,
      "year": 1981
    },
    {
      "title": "Night's Child (Sweep, #15)",
      "author": "Cate Tiernan",
      "rating": 4.13,
      "year": 2003
    },
    {
      "title": "Seeker (Sweep, #10)",
      "author": "Cate Tiernan",
      "rating": 4.09,
      "year": 2002
    },
    {
      "title": "Full Circle (Sweep, #14)",
      "author": "Cate Tiernan",
      "rating": 4.19,
      "year": 2002
    },
    {
      "title": "Origins (Sweep, #11)",
      "author": "Cate Tiernan",
      "rating": 4.05,
      "year": 2002
    },
    {
      "title": "Reckoning (Sweep, #13)",
      "author": "Cate Tiernan",
      "rating": 4.13,
      "year": 2002
    },
    {
      "title": "Eclipse (Sweep, #12)",
      "author": "Cate Tiernan",
      "rating": 4.16,
      "year": 2002
    },
    {
      "title": "Awakening (Sweep, #5)",
      "author": "Cate Tiernan",
      "rating": 4.16,
      "year": 2001
    },
    {
      "title": "Changeling (Sweep, #8)",
      "author": "Cate Tiernan",
      "rating": 4.17,
      "year": 2001
    },
    {
      "title": "Dark Magick (Sweep, #4)",
      "author": "Cate Tiernan",
      "rating": 4.16,
      "year": 2001
    },
    {
      "title": "The Calling (Sweep, #7)",
      "author": "Cate Tiernan",
      "rating": 4.16,
      "year": 2001
    },
    {
      "title": "Spellbound (Sweep, #6)",
      "author": "Cate Tiernan",
      "rating": 4.19,
      "year": 2001
    },
    {
      "title": "Strife (Sweep, #9)",
      "author": "Cate Tiernan",
      "rating": 4.12,
      "year": 2002
    },
    {
      "title": "Blood Witch (Sweep, #3)",
      "author": "Cate Tiernan",
      "rating": 4.1,
      "year": 2001
    },
    {
      "title": "Dragon's Heart (The Pit Dragon Chronicles, #4)",
      "author": "Jane Yolen",
      "rating": 3.92,
      "year": 2009
    },
    {
      "title": "The Coven (Sweep, #2)",
      "author": "Cate Tiernan",
      "rating": 4.06,
      "year": 2001
    },
    {
      "title": "A Sending of Dragons (Pit Dragon Chronicles, #3)",
      "author": "Jane Yolen",
      "rating": 3.92,
      "year": 1987
    },
    {
      "title": "The Haunted (The Hollow, #2)",
      "author": "Jessica Verday",
      "rating": 4.14,
      "year": 2010
    },
    {
      "title": "The Hidden (The Hollow, #3)",
      "author": "Jessica Verday",
      "rating": 4.13,
      "year": 2011
    },
    {
      "title": "Heart's Blood (Pit Dragon Chronicles, #2)",
      "author": "Jane Yolen",
      "rating": 4,
      "year": 1984
    },
    {
      "title": "Spellbinder (Night World, #3)",
      "author": "L.J. Smith",
      "rating": 3.9,
      "year": 1996
    },
    {
      "title": "Daughters of Darkness (Night World, #2)",
      "author": "L.J. Smith",
      "rating": 3.92,
      "year": 1996
    },
    {
      "title": "The Chosen (Night World, #5)",
      "author": "L.J. Smith",
      "rating": 4.08,
      "year": 1997
    },
    {
      "title": "Dark Angel (Night World, #4)",
      "author": "L.J. Smith",
      "rating": 3.77,
      "year": 1996
    },
    {
      "title": "Legacy of Light (Effigies, #3)",
      "author": "Sarah Raughley",
      "rating": 3.95,
      "year": 2018
    },
    {
      "title": "Diamond & Dawn (Amber & Dusk, #2)",
      "author": "Lyra Selene",
      "rating": 3.73,
      "year": 2019
    },
    {
      "title": "Siege of Shadows (Effigies, #2)",
      "author": "Sarah Raughley",
      "rating": 3.94,
      "year": 2017
    },
    {
      "title": "The Tale of the Body Thief (The Vampire Chronicles, #4)",
      "author": "Anne Rice",
      "rating": 3.75,
      "year": 1992
    },
    {
      "title": "The Queen of the Damned (The Vampire Chronicles, #3)",
      "author": "Anne Rice",
      "rating": 3.91,
      "year": 1988
    },
    {
      "title": "The Vampire Lestat (The Vampire Chronicles, #2)",
      "author": "Anne Rice",
      "rating": 4.09,
      "year": 1985
    },
    {
      "title": "Between a Rock and a Hard Place",
      "author": "Aron Ralston",
      "rating": 3.84,
      "year": 2004
    },
    {
      "title": "Fading Frost (Crystal Frost, #4)",
      "author": "Alicia Rades",
      "rating": 4.18,
      "year": 2017
    },
    {
      "title": "Inspired by Frost (Crystal Frost, #3)",
      "author": "Alicia Rades",
      "rating": 4.15,
      "year": 2016
    },
    {
      "title": "Desire in Frost (Crystal Frost, #2)",
      "author": "Alicia Rades",
      "rating": 4.14,
      "year": 2016
    },
    {
      "title": "Frost Like Night (Snow Like Ashes, #3)",
      "author": "Sara Raasch",
      "rating": 3.95,
      "year": 2016
    },
    {
      "title": "Ice Like Fire (Snow Like Ashes, #2)",
      "author": "Sara Raasch",
      "rating": 3.74,
      "year": 2015
    },
    {
      "title": "The Son of Summer Stars (Firebringer, #3)",
      "author": "Meredith Ann Pierce",
      "rating": 4.18,
      "year": 1996
    },
    {
      "title": "Dark Moon (Firebringer, #2)",
      "author": "Meredith Ann Pierce",
      "rating": 4.15,
      "year": 1992
    },
    {
      "title": "Dragons of the Watch (Valley of the Dragons, #3)",
      "author": "Donita K. Paul",
      "rating": 4.23,
      "year": 2011
    },
    {
      "title": "Dragons of the Valley (Valley of the Dragons, #2)",
      "author": "Donita K. Paul",
      "rating": 4.11,
      "year": 2010
    },
    {
      "title": "King (The Dragon King Chronicles, #3)",
      "author": "Ellen Oh",
      "rating": 3.82,
      "year": 2015
    },
    {
      "title": "Warrior (The Dragon King Chronicles, #2)",
      "author": "Ellen Oh",
      "rating": 3.87,
      "year": 2013
    },
    {
      "title": "The Book of Dreams (The Chronicles of Faerie, #4)",
      "author": "O.R. Melling",
      "rating": 4.16,
      "year": 2003
    },
    {
      "title": "Dragonquest (Dragonriders of Pern, #2)",
      "author": "Anne McCaffrey",
      "rating": 4.09,
      "year": 1971
    },
    {
      "title": "The White Dragon (Pern: Dragonriders of Pern, #3)",
      "author": "Anne McCaffrey",
      "rating": 4.19,
      "year": 1978
    },
    {
      "title": "Kingdom of the Cursed (Kingdom of the Wicked, #2)",
      "author": "Kerri Maniscalco",
      "rating": 4.16,
      "year": 2021
    },
    {
      "title": "Kingdom of the Feared (Kingdom of the Wicked, #3)",
      "author": "Kerri Maniscalco",
      "rating": 3.89,
      "year": 2022
    },
    {
      "title": "The Summer King (The Chronicles of Faerie, #2)",
      "author": "O.R. Melling",
      "rating": 4.09,
      "year": 1999
    },
    {
      "title": "The Light-Bearer's Daughter (The Chronicles of Faerie, #3)",
      "author": "O.R. Melling",
      "rating": 3.96,
      "year": 2001
    },
    {
      "title": "Dragon Outcast (Age of Fire, #3)",
      "author": "E.E. Knight",
      "rating": 4.12,
      "year": 2007
    },
    {
      "title": "Dragon Avenger (Age of Fire, #2)",
      "author": "E.E. Knight",
      "rating": 4.11,
      "year": 2006
    },
    {
      "title": "Master of Iron (Bladesmith, #2)",
      "author": "Tricia Levenseller",
      "rating": 4.07,
      "year": 2022
    },
    {
      "title": "Dragon Strike (Age of Fire, #4)",
      "author": "E.E. Knight",
      "rating": 4.01,
      "year": 2008
    },
    {
      "title": "Dragon Rule (Age of Fire, #5)",
      "author": "E.E. Knight",
      "rating": 3.98,
      "year": 2009
    },
    {
      "title": "Dragon Fate (Age of Fire, #6)",
      "author": "E.E. Knight",
      "rating": 3.77,
      "year": 2011
    },
    {
      "title": "Lightbringer (Empirium, #3)",
      "author": "Claire Legrand",
      "rating": 3.98,
      "year": 2020
    },
    {
      "title": "Kingsbane (Empirium, #2)",
      "author": "Claire Legrand",
      "rating": 3.92,
      "year": 2019
    },
    {
      "title": "Double Dexter (Dexter, #6)",
      "author": "Jeff Lindsay",
      "rating": 3.83,
      "year": 2011
    },
    {
      "title": "Dexter Is Dead (Dexter, #8)",
      "author": "Jeff Lindsay",
      "rating": 3.57,
      "year": 2015
    },
    {
      "title": "Dexter's Final Cut (Dexter, #7)",
      "author": "Jeff Lindsay",
      "rating": 3.6,
      "year": 2013
    },
    {
      "title": "Bright Burns the Night (Dark Breaks the Dawn Duology, #2)",
      "author": "Sara B. Larson",
      "rating": 3.82,
      "year": 2018
    },
    {
      "title": "Resurrection (Wicked, #5)",
      "author": "Nancy Holder",
      "rating": 3.95,
      "year": 2009
    },
    {
      "title": "Curse (Wicked, #2)",
      "author": "Nancy Holder",
      "rating": 3.5,
      "year": 2002
    },
    {
      "title": "Legacy (Wicked, #3)",
      "author": "Nancy Holder",
      "rating": 3.54,
      "year": 2003
    },
    {
      "title": "Spellbound (Wicked, #4)",
      "author": "Nancy Holder",
      "rating": 3.61,
      "year": 2003
    },
    {
      "title": "Winter Glass (Spindle Fire #2)",
      "author": "Lexa Hillyer",
      "rating": 3.43,
      "year": 2018
    },
    {
      "title": "The Magician King (The Magicians, #2)",
      "author": "Lev Grossman",
      "rating": 3.92,
      "year": 2011
    },
    {
      "title": "Shadow Scale (Seraphina, #2)",
      "author": "Rachel Hartman",
      "rating": 3.74,
      "year": 2015
    },
    {
      "title": "The Whim of the Dragon (The Secret Country, #3)",
      "author": "Pamela Dean",
      "rating": 3.87,
      "year": 1989
    },
    {
      "title": "The Hidden Land (The Secret Country, #2)",
      "author": "Pamela Dean",
      "rating": 3.8,
      "year": 1986
    },
    {
      "title": "Prophecy: Child of Earth (Symphony of Ages, #2)",
      "author": "Elizabeth Haydon",
      "rating": 4.13,
      "year": 2000
    },
    {
      "title": "Destiny: Child of the Sky (Symphony of Ages, #3)",
      "author": "Elizabeth Haydon",
      "rating": 4.14,
      "year": 2001
    },
    {
      "title": "Arch Wizard (Falconfar Saga, #2)",
      "author": "Ed Greenwood",
      "rating": 3.47,
      "year": 2008
    },
    {
      "title": "Falconfar (Falconfar Saga, #3)",
      "author": "Ed Greenwood",
      "rating": 3.41,
      "year": 2010
    },
    {
      "title": "The Magician's Land (The Magicians, #3)",
      "author": "Lev Grossman",
      "rating": 4.14,
      "year": 2014
    },
    {
      "title": "Torn (Trylle, #2)",
      "author": "Amanda Hocking",
      "rating": 4.03,
      "year": 2010
    },
    {
      "title": "Ascend (Trylle, #3)",
      "author": "Amanda Hocking",
      "rating": 4.08,
      "year": 2012
    },
    {
      "title": "All Darkness Met (Dread Empire, #3)",
      "author": "Glen Cook",
      "rating": 3.93,
      "year": 1980
    },
    {
      "title": "October's Baby (Dread Empire, #2)",
      "author": "Glen Cook",
      "rating": 3.74,
      "year": 1980
    },
    {
      "title": "Fell (The Sight, #2)",
      "author": "David Clement-Davies",
      "rating": 4.18,
      "year": 2007
    },
    {
      "title": "Seasons of Chaos (Seasons of the Storm, #2)",
      "author": "Elle Cosimano",
      "rating": 3.78,
      "year": 2021
    },
    {
      "title": "The Shadowglass (The Bone Witch, #3)",
      "author": "Rin Chupeco",
      "rating": 4.29,
      "year": 2019
    },
    {
      "title": "A Tale of Sorcery... (A Tale of Magic, #3)",
      "author": "Chris Colfer",
      "rating": 4.41,
      "year": 2021
    },
    {
      "title": "Dragonswood (Wilde Island Chronicles, #2)",
      "author": "Janet Lee Carey",
      "rating": 3.9,
      "year": 2012
    },
    {
      "title": "In the Time of Dragon Moon (Wilde Island Chronicles, #3)",
      "author": "Janet Lee Carey",
      "rating": 4.13,
      "year": 2015
    },
    {
      "title": "The Last Life of Prince Alastor (Prosper Redding, #2)",
      "author": "Alexandra Bracken",
      "rating": 3.99,
      "year": 2019
    },
    {
      "title": "Vosper's Revenge (Dragon Stone Saga #3)",
      "author": "Kristian Alva",
      "rating": 3.75,
      "year": 2012
    },
    {
      "title": "Crooked Kingdom (Six of Crows, #2)",
      "author": "Leigh Bardugo",
      "rating": 4.6,
      "year": 2016
    },
    {
      "title": "Ruin and Rising (The Shadow and Bone Trilogy, #3)",
      "author": "Leigh Bardugo",
      "rating": 4,
      "year": 2014
    },
    {
      "title": "Witch (Doppelganger, #2)",
      "author": "Marie Brennan",
      "rating": 3.97,
      "year": 2006
    },
    {
      "title": "Rise of the Blood Masters (Dragon Stone Saga #5)",
      "author": "Kristian Alva",
      "rating": 4.17,
      "year": 2014
    },
    {
      "title": "Kathir's Redemption (Dragon Stone Saga #6)",
      "author": "Kristian Alva",
      "rating": 4.25,
      "year": 2015
    },
    {
      "title": "The Fall of Miklagard (Dragon Stone Saga #8)",
      "author": "Kristian Alva",
      "rating": 4.42,
      "year": 2017
    },
    {
      "title": "Sisren's Betrayal (Dragon Stone Saga #9)",
      "author": "Kristian Alva",
      "rating": 4.55,
      "year": 2018
    },
    {
      "title": "Soulmate (Night World, #6)",
      "author": "L.J. Smith",
      "rating": 4.07,
      "year": 1997
    },
    {
      "title": "Huntress (Night World, #7)",
      "author": "L.J. Smith",
      "rating": 4.15,
      "year": 1997
    },
    {
      "title": "Black Dawn (Night World, #8)",
      "author": "L.J. Smith",
      "rating": 4.06,
      "year": 1997
    },
    {
      "title": "Witchlight (Night World, #9)",
      "author": "L.J. Smith",
      "rating": 4.1,
      "year": 1998
    },
    {
      "title": "1964: Eyes of the Storm",
      "author": "Paul McCartney",
      "rating": 4.48,
      "year": 2023
    },
    {
      "title": "Game (I Hunt Killers, #2)",
      "author": "Barry Lyga",
      "rating": 4.23,
      "year": 2013
    },
    {
      "title": "Blood of My Blood (I Hunt Killers, #3)",
      "author": "Barry Lyga",
      "rating": 4.32,
      "year": 2014
    },
    {
      "title": "White Is for Magic (Blue is for Nightmares, #2)",
      "author": "Laurie Faria Stolarz",
      "rating": 4.02,
      "year": 2004
    },
    {
      "title": "Silver Is for Secrets (Blue is for Nightmares, #3)",
      "author": "Laurie Faria Stolarz",
      "rating": 4.08,
      "year": 2005
    },
    {
      "title": "Red is for Remembrance (Blue is for Nightmares, #4)",
      "author": "Laurie Faria Stolarz",
      "rating": 4.07,
      "year": 2005
    },
    {
      "title": "The Dragon's Curse (Transference, #2)",
      "author": "Bethany Wiggins",
      "rating": 4.17,
      "year": 2018
    },
    {
      "title": "The Dragon's Revenge (Transference #3)",
      "author": "Bethany Wiggins",
      "rating": 4.17,
      "year": 2021
    },
    {
      "title": "Ruin of Stars (Mask of Shadows, #2)",
      "author": "Linsey Miller",
      "rating": 3.75,
      "year": 2018
    },
    {
      "title": "The Vampire Archives",
      "author": "Otto Penzler",
      "rating": 3.93,
      "year": 2009
    }
  ],
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));