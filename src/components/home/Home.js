import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleHomeDrawer } from '../../actions/overlays';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


export default class Home extends Component {
  render() {
    return (
      <main id='home'>
        <div style={Styles.root}>
          <GridList style={Styles.gridList} cols={2.2}>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                titleStyle={Styles.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </main>
    );
  }
}

const tilesData = [
  {
    img: 'http://roaringforkliquors.com/wp-content/uploads/2017/11/breakfast_7.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://www.bobevans.com/-/media/bobevans_com/images/our-restaurants/menu/breakfast/waffle-breakfast-with-bacon.jpg?h=333&w=500&la=en&hash=DAB668251C6F07DE002A4DB9199B609E349EF3C9',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://img.taste.com.au/yvNTTrsD/taste/2016/11/family-favourite-hamburgers-2911-1.jpeg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://mayakitchenette.com/wp-content/uploads/2015/01/Delicious-Pasta-Salad-with-Avocado-Dressing-1.jpg?x93888',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://www.treasurybrisbane.com.au/sites/default/files/styles/max_carousel/public/thumbnails/image/Steak%20and%20Chips%282%29.jpg?itok=yM-mHeZS',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://gbc-cdn-public-media.azureedge.net/img17207.1426x713.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://www.simplyrecipes.com/wp-content/uploads/2016/08/2016-08-24-Harissa-Salmon-2.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps26090_THAT2453289D12_14_5b_WEB.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const Styles = {
  main: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
}
