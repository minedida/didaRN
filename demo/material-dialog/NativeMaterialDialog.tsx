import React, { Component } from 'react'
import { Button, View } from 'react-native'
import DialogAndroid from 'react-native-dialogs'

class NativeMaterialDialog extends Component {
  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Show DialogAndroid" onPress={this.showDialogAndroid}/>
    </View>
  }

  showDialogAndroid = async () => {
    /*const { action } = await DialogAndroid.alert('Title', 'Message');
    switch (action) {
      case DialogAndroid.actionPositive:
        console.log('positive!')
        break;
      case DialogAndroid.actionNegative:
        console.log('negative!')
        break;
      case DialogAndroid.actionNeutral:
        console.log('neutral!')
        break;
      case DialogAndroid.actionDismiss:
        console.log('dismissed!')
        break;
    }*/
    /*DialogAndroid.showProgress('Downloading...', {
      style: DialogAndroid.progressHorizontal // omit this to get circular
    });
    setTimeout(DialogAndroid.dismiss, 5000);*/
    /*const { selectedItem } = await DialogAndroid.showPicker('Pick a fruit', null, {
      items: [
        { label:'Apple', id:'apple' },
        { label:'Orange', id:'orange' },
        { label:'Pear', id:'pear' }
      ]
    });
    console.log('You selected item:', selectedItem);*/
    const { selectedItem } = await DialogAndroid.showPicker('Pick a fruit', null, {
      // positiveText: null, // if positiveText is null, then on select of item, it dismisses dialog
      negativeText: 'Cancel',
      type: DialogAndroid.listRadio,
      selectedId: 'apple',
      items: [
        { label:'Apple', id:'apple' },
        { label:'Orange', id:'orange' },
        { label:'Pear', id:'pear' }
      ]
    });
    console.log('You picked:', selectedItem);

  }
}

export default NativeMaterialDialog
