import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import StickyContainer from 'recyclerlistview/dist/reactnative/core/StickyContainer';

const { width } = Dimensions.get('window')
export default class StickySample extends React.Component {

  constructor(props) {
    super(props);
    this._setRef = this._setRef.bind(this);

    this._recyclerRef = null;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 6, 7, 8, 9, 10]
    this.data = [...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr]
    this.dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
    this.dataProvider = this.dataProvider.cloneWithRows(this.data);
    this.layoutProvider = new LayoutProvider(
      index => {
        return index;
      },
      (type, dimension) => {
        dimension.height = 60;
        dimension.width = width;
      }
    );
  }

  _rowRenderer = (type, data, index) => {
    let color = 'grey';
    switch (index % 6) {
      case 0:
        color = "purple";
        break;
      case 1:
        color = "green";
        break;
      case 2:
        color = "blue";
        break;
      case 3:
        color = "red";
        break;
      case 4:
        color = "yellow";
        break;
      case 5:
        color = "orange";
        break;
    }
    return (
      <View style={{ height: 100, backgroundColor: color, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32 }}>{index}</Text>
      </View>
    );
  };

  /**
   * This method is called whenever a view has to be stuck as a header or footer.
   * Override the views for whichever sticky view requires changes.
   * Eg. This can be used to add shadows etc. to the views once they stick.
   */
  _overrideRowRenderer = (type, data, index) => {
    const view = this._rowRenderer(type, data, index);
    switch (index) {
      case 7: // Only overriding sticky index 7, sticky indices 3 and 10 will remain as they are.
        const color = "cyan";
        return (
          <View style={{ height: 100, backgroundColor: color, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32 }}>Overridden sticky</Text>
          </View>
        );
        break;
    }
    return view;
  };

  _setRef(recycler) {
    this._recyclerRef = recycler;
  }

  render() {
    const Indices = [...Array(159).keys()].filter(v => v % 5 === 0)
    return (
      <StickyContainer stickyHeaderIndices={Indices}
                       overrideRowRenderer={this._overrideRowRenderer}>
        <RecyclerListView layoutProvider={this.layoutProvider}
                          ref={this._setRef}
                          dataProvider={this.dataProvider}
                          rowRenderer={this._rowRenderer}
                          showsVerticalScrollIndicator={true}/>
      </StickyContainer>
    );
  }
}
