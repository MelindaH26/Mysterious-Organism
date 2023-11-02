/*TODO
- Create a .complementStrand() method to the factory function’s object that returns the
complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's
match with 'G's and vice versa. (Check the hint for more details)
- Use the .compareDNA() to find the two most related instances of pAequor.
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//pAequor Factory
const pAequorFactory = (organismNum, dnaArray) => {
  return {
    specimenNum: organismNum,
    dna: dnaArray,
    mutate() {
      const num = Math.floor(Math.random() * this.dna.length);
      let newLetter = returnRandBase();
      while (this.dna[num] === newLetter) {
        newLetter = returnRandBase();
      }
      this.dna[num] = newLetter;
      return this.dna;
    }, 
    compareDNA(pAequor) {
      let dnaSameCount = 0;
      for(i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          dnaSameCount ++;
        }
      }
      const percentageMatch = ((dnaSameCount / this.dna.length) * 100).toFixed(3);
      return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentageMatch}% DNA in common`;
    },
    willLikelySurvive() {
      let survivalBases = 0;
      for (n = 0; n < this.dna.length; n++) {
        if (this.dna[n] === 'G' || this.dna[n] === 'G') {
          survivalBases ++;
        }
      }
      const survivalChance = ((survivalBases / this.dna.length) * 100);
      if (survivalChance >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// set up a desired number of instances and store in an array
const organismsToStudy = (numOfOrganisms) => {
  survivalArray = [];
  let x = 1;
  while (survivalArray.length < numOfOrganisms) {
    organismX = pAequorFactory(x, mockUpStrand());
    if(organismX.willLikelySurvive() === true) {
      survivalArray.push(organismX);
    }
    x ++;
  }
  return survivalArray;
}

// return and log 30 pAequor subjects (that are likely to survive)
console.log(organismsToStudy(30));