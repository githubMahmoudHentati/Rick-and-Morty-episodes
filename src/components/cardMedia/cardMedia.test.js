import {mount, shallow} from "enzyme";
import {CardMedia} from "./cardMedia";


describe("",()=>{
  let intProp={
    name:'Morty',
    description:'Main Character',
    textNameStyle:'Text-Card-media',
    textDescriptionStyle:'Description-Card-media',
  }
  let container
  beforeEach(() => (container = shallow(<CardMedia {...intProp} />)));
  it('should render CardMedia component Name', () => {
    expect(container.find('.Text-Card-media').text()).toContain('Morty');
  });
  it('should render CardMedia component Description', () => {
    expect(container.find('.Description-Card-media').text()).toContain('Character');
  });
})
