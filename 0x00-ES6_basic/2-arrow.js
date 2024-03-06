export default function getNeighborhoodsList() {
  //const self = this;
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const add = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };

  this.addNeighborhood = add;
}
