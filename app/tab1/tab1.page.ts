import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //New code added:
  title = "Grocery Lists"; //title variable to be used

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ]

  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index){
    console.log("Removeing Item -", item, index);
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  addItem(){
    console.log("Adding Item");
    this.showAddItemPrompt();
  }


  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      header: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          value: '',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Confirm Save', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

}
