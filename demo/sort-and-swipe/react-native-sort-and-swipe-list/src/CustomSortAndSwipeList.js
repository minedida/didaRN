import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform
} from "react-native";
import SortableList from "./SortableList";
import SwipeableContainer from "./SwipeableContainer";
import uuidv1 from 'uuid/v1'
import Row from "../../../../src/components/todo/Row";

// https://github.com/gitim/react-native-sortable-list
// https://github.com/jemise111/react-native-swipe-list-view/blob/master/docs/SwipeRow.md


// ref: https://medium.com/@justinrohweller/a-swipeable-and-sortable-list-in-react-native-8b55cdef2d7b

const window = Dimensions.get("window");

const defaultData2 = [
  {
    image: "https://placekitten.com/200/240",
    text: "Chloe"
  },
  {   image: "https://placekitten.com/200/203", text: "Oscar" }];
const defaultData =  [
  { id: uuidv1(), title: '标题1', checked: false, createAt: 1561473966283 },
  { id: uuidv1(), title: '标题2', checked: false, createAt: 1561473966284 },
  { id: uuidv1(), title: '标题3', checked: false, createAt: 1561473966285 },
  { id: uuidv1(), title: '标题4', checked: false, createAt: 1561473966283 },
  { id: uuidv1(), title: '标题5', checked: false, createAt: 1561473966284 },
  { id: uuidv1(), title: '标题6', checked: false, createAt: 1561473966285 },
  { id: uuidv1(), title: '标题7', checked: false, createAt: 1561473966283 },
  { id: uuidv1(), title: '标题8', checked: false, createAt: 1561473966284 },
  { id: uuidv1(), title: '标题9', checked: false, createAt: 1561473966285 },
  { id: uuidv1(), title: '标题10', checked: false, createAt: 1561473966283 },
  { id: uuidv1(), title: '标题11', checked: false, createAt: 1561473966284 },
  { id: uuidv1(), title: '标题12', checked: true, createAt: 1561473966285 },
  { id: uuidv1(), title: '标题13', checked: true, createAt: 1561473966283 },
  { id: uuidv1(), title: '标题14', checked: true, createAt: 1561473966284 },
  { id: uuidv1(), title: '标题15', checked: true, createAt: 1561473966285 },
]

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingVertical: 40,

    ...Platform.select({
      ios: {
        paddingTop: 20
      }
    })
  },
  contentContainerStyle: {
    width: window.width,

    ...Platform.select({
      ios: {
        paddingHorizontal: 30
      },

      android: {
        paddingHorizontal: 0
      }
    })
  },
  swipeRowProps: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 86, //can be 80 if you want no gaps between items.
    width: window.width
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
    // width: window.width - 40 * 2, don't add width it cuts edges.
    borderRadius: 10,

    // raised
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOpacity: 1,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 2,
    elevation: 0
  },
  animatedRowViewStyle: {
    height: 90 + 6,
    width: window.width,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
})

class CustomSortAndSwipeList extends Component {
  constructor(props) {
    super(props);
    this.openRowKey = "-1";
    this.rowsRef = {};
    this.state = {
      scrollEnabled: true,
      rowHasMoved: false
    };
  }

  myOnMove = async () => {
    await this.setState({rowHasMoved: true});
  };

  swipeGestureBegan = () => {
    this.setState({scrollEnabled: false});
  };

  rowDoneMoving = async () => {
    await this.setState({rowHasMoved: false});
  };

  onRowOpen = key => {
    this.openRowKey = key;

    // Close all other rows when one is opened.
    let closeRowKey = 0;
    for (let i = 0; i < defaultData.length; i++) {
      closeRowKey = i;
      if (parseInt(this.openRowKey, 10) !== closeRowKey) {
        const rowRef = this.rowsRef[i.toString()];
        rowRef.closeRow();
      }
    }
    this.setState({scrollEnabled: true});
  };

  onRowClose = async key => {
    if (this.openRowKey === key) {
      await this.setState({scrollEnabled: true});
    }
    this.setState({scrollEnabled: true});
  };

  Row2 = (data) => {
    return <View style={{marginHorizontal: 10, flexDirection: "row", alignItems: "center",
      backgroundColor: "#fff", height: 80, width: window.width - 40 * 2, borderRadius: 4}}>
      <Image
        source={{uri: data.image}}
        style={{width: 50, height: 50, marginRight: 30, borderRadius: 25}}/>
      <Text style={{fontSize: 24, color: "#222222"}}>
        {data.text}
      </Text>
    </View>
  }

  renderRow = ({key, index, data, active}) => {
    return (
      <SwipeableContainer
        ref={c => (this.rowsRef[key] = c)}
        data={data}
        active={active}
        rowId={index}
        swipeGestureBegan={this.swipeGestureBegan} //开始左右滑动时，禁止上下滚动
        rowHasMoved={this.state.rowHasMoved} //used in myRow to close open rows if needed
        rowDoneMoving={this.rowDoneMoving} //used in myRow to close open rows if needed.
        openRowKey={this.openRowKey} //used in myRow to close open rows if needed
        onRowPress={rowId => {
          alert(`${rowId} has pressed`)
        }}
        // timeToUpdate={this.state.timeToUpdate} //this.props (because purecomponent and is shallowequals, need to tell it to refresh deep.)
        onRowOpen={this.onRowOpen} //this.props.onRowOpen
        onRowClose={this.onRowClose} //this.props.onRowClose
        // swipeRowProps={styles.swipeRowProps}
        renderHiddenRow={() => <View style={{flex: 1 }}/>} // 占位
        // rowStyle={styles.rowStyle}
        // animatedRowViewStyle={styles.animatedRowViewStyle}
      >
        {
          <Row {...{key, index, item: data, active}} onItemCheck={() => {}}/>
        }
        {/*{this.Row2(data)}*/}
      </SwipeableContainer>
    );
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <SortableList
          manuallyActivateRows
          data={defaultData}
          myOnMove={this.myOnMove}
          contentContainerStyle={{
            width: window.width
          }}
          style={{flex: 1}}
          renderRow={this.renderRow}
          scrollEnabled={this.state.scrollEnabled}
        />
      </View>
    );
  }
}

export default CustomSortAndSwipeList;
