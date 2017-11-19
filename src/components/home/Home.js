import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleHomeDrawer } from '../../actions/overlays';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';


export default class Home extends Component {

  getGridTiles = () => {
    return tilesData.map((tile) => (
      <GridTile
        key={tile.img}
        title={tile.title}
        titleStyle={Styles.titleStyle}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      >
        <img src={tile.img} style={Styles.imageSize} />
      </GridTile>

    ));
  }

  render() {
    return (
      <main id='home' style={Styles.main}>
        <Card>
          <CardHeader
            title="Promotions"
          />
        </Card>
        <div style={Styles.root}>

          <GridList
            style={Styles.gridList}
            cols={2.2}
            cellHeight='auto'
          >
            {this.getGridTiles()}
          </GridList>
        </div>
        <div style={Styles.middle}>
          <FlatButton label="Subscribe to Our News Letter" fullWidth={true} />
        </div>
        <div style={Styles.restaurant}>
          Restaurant
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
    title: 'Waffles',
    author: 'pashminu',
  },
  {
    img: 'http://img.taste.com.au/yvNTTrsD/taste/2016/11/family-favourite-hamburgers-2911-1.jpeg',
    title: 'Burger',
    author: 'Danson67',
  },
  {
    img: 'http://img.taste.com.au/uh-PS-4S/taste/2016/11/poached-chicken-salad-with-tomato-and-raspberry-dressing-91967-1.jpeg',
    title: 'Salad',
    author: 'fancycrave1',
  },
  {
    img: 'http://www.handsonthomascounty.org/wp-content/uploads/2015/03/BGC-Steak-Dinner1.jpg',
    title: 'Steak',
    author: 'Hans',
  },
  {
    img: 'http://foudefoodmtl.com/wp-content/uploads/2013/02/LobsterPasta-5.jpg',
    title: 'lobster lasagna',
    author: 'fancycravel',
  },
  {
    img: 'http://www.simplyrecipes.com/wp-content/uploads/2016/08/2016-08-24-Harissa-Salmon-2.jpg',
    title: 'Salmon',
    author: 'jill111',
  },
  {
    img: 'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps26090_THAT2453289D12_14_5b_WEB.jpg',
    title: 'Banana Cream Pie',
    author: 'BkrmadtyaKarki',
  },
];

const Styles = {
  main: {
    height: '100%',
    width: '100%',
    overflow: 'scroll',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2em',
    boxSizing: 'border-box',


  },
  root: {
    width: '100%',
    height: '20em',
    display: 'flex',
    justifyContent: 'space-around',
    overflowX: 'scroll',
  },
  gridList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
  },
  imageSize: {
    height: '20em',
  },
  middle: {
    width: '100%',
    height: '7em',
    backgroundColor: 'grey',
    marginTop: '5em',
    marginBottom: '5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurant: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em',
    fontWeight: '100'
  }
}
