import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    ScrollView, 
    Switch, 
    Platform, 
    AsyncStorage, 
    Alert, 
    DatePickerIOS,
    Keyboard, 
} from 'react-native';
import { Field, reduxForm } from 'redux-form'
import { ButtonGroup, Divider,Tooltip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import {styles} from '../Styles/styles';

ContactForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(Component)
  
export default ContactForm;

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 0,
            modalVisible: false,
            mal: 0,
            date: "",
            Email: '',
            password: '',
            validate_user: '',
            validate_pass: '',
            pass_flag: true,
            userFname: '',
            chosenDate: new Date(),
            lname:'',
            value:true,
            address:''
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.updateIndexM = this.updateIndexM.bind(this)
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    visibility() { 
        (this.setState({ pass_flag: !this.state.pass_flag }))
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
        Keyboard.dismiss()
    }
    updateIndexM(selectedIndex) {
        this.setState({ mal: selectedIndex })
    }
    render() {



        const component1 = () => <Text>SIGN IN</Text>
        const component2 = () => <Text>SIGN UP</Text>
        const male = () => <Text>Male</Text>
        const female = () => <Text>Female</Text>
        const buttons = [{ element: component1 }, { element: component2 }]
        const buttonm = [{ element: male }, { element: female }]
        const { selectedIndex } = this.state
        const { mal } = this.state
        return (
            
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View 
                    style={{ marginBottom: 16, marginTop: Platform.OS === 'ios' ? 64 : 0, }}
                    >
                        <TouchableOpacity 
                            style={{ flexDirection: 'row' }}
                            onPress={()=>Actions.pop()}
                            >
                            <Icon style={styles.searchIcon} name="chevron-thin-left" size={40} color='#0099ff' />
                            <Text style={{ paddingTop: 16, marginLeft: -16, fontSize: 20, color: '#0099ff' }}>
                                Back
                            </Text>
                        </TouchableOpacity>
                </View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    selectedButtonStyle={{ backgroundColor: '#0099ff' }}
                    containerStyle={{ height: 40, marginTop: 0, marginLeft: 32, marginRight: 32, borderRadius: 8, borderColor: '#0099ff' }} >
                </ButtonGroup>
                {(this.state.selectedIndex == 1)
                    ? (
                        <View style={{ flex: 1, marginBottom: 16 }}>
                            <ScrollView style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row', margin: 24 }}>
                                    <Icon name="user" size={32} color='black'></Icon>
                                    <Field
                                        name={firstname}
                                        component={TextInput}
                                        value={this.state.userFname}
                                        style={styles.input}
                                        placeholder="First Name"
                                        onChangeText={(text) => { this.setState({ userFname: text }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <View>
                                        <TouchableOpacity onPress={() => this.setState({ userFname: '' })}>
                                        <Icon name='circle-with-cross' size={32}></Icon></TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ flex: 1, flexDirection: 'row', margin: 24 }}>
                                    <Icon name="user" size={32} color='black'></Icon>
                                    <TextInput
                                        value={this.state.lname}
                                        style={styles.input}
                                        placeholder="Last Name"
                                        onChangeText={(searchStrig) => { this.setState({ lname:searchStrig}) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <View>
                                        <TouchableOpacity onPress={() => this.setState({ lname: '' })}>
                                        <Icon name='circle-with-cross' size={32}></Icon></TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ flex: 1, flexDirection: 'row', margin: 24 }}>
                                    <Icon name="home" size={32} color='black' />
                                    <TextInput
                                        style={styles.input}
                                        value={this.state.address}
                                        placeholder="Address"
                                        onChangeText={(searchString) => { this.setState({ address:searchString }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ marginTop: 16, marginLeft: 32, flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                    <Text>Gender:</Text>
                                    <ButtonGroup
                                        onPress={this.updateIndexM}
                                        selectedIndex={mal}
                                        buttons={buttonm}
                                        selectedButtonStyle={{ backgroundColor: '#0099ff' }}
                                        containerStyle={{ height: 40, marginTop: 0, marginLeft: 32, marginRight: 32, borderRadius: 8, borderColor: '#0099ff', flex: 1 }}
                                    />
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32, marginVertical: 16 }} />
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 32 }}>
                                    <Text>Email Address:</Text>
                                    <TextInput
                                        value={this.state.Email}
                                        style={styles.input}
                                        placeholder="Email Address"
                                        onChangeText={(searchString) => { this.setState({ Email: searchString }) }}
                                        underlineColorAndroid="transparent"
                                    /><Tooltip popover={<Text>Please Enter Your Email</Text>} backgroundColor="lightpink">
                                    <Feather name="info" size={32} /></Tooltip>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32, marginVertical: 16 }} />

                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 32 }}>
                                    <Text>Password:</Text>
                                    <TextInput
                                        style={{ flex: 1 }}
                                        secureTextEntry={this.state.pass_flag}
                                        onChangeText={(searchString) => { this.setState({ password: searchString }) }}
                                        placeholder='***' 
                                    />
                                    <View>
                                        <TouchableOpacity 
                                            activeOpacity={0.1} 
                                            onPress={() => this.visibility()}
                                        >{(this.state.pass_flag == true) ? (<MaterialIcons name='visibility-off' size={32}></MaterialIcons>) : (<MaterialIcons name='visibility' size={32}></MaterialIcons>)}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32, marginVertical: 16 }} />
                                <View>
                                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginHorizontal: 32, alignItems: 'center' }}>
                                        <Text>Date Of Birth:</Text>
                                        <View style={{ flex: 1 }}>
                                            {(Platform.OS === "android" 
                                                ? (
                                                    <DatePicker
                                                        style={{ width: 200, }}
                                                        date={this.state.date}
                                                        mode="date"
                                                        androidMode='spinner'
                                                        placeholder="select date"
                                                        format='DD-MM-YYYY'
                                                        maxDate={new Date()}
                                                        confirmBtnText="Confirm"
                                                        cancelBtnText="Cancel"
                                                        onDateChange={(date) => { this.setState({ date: date }) }}
                                                        customStyles={{
                                                            dateIcon: {
                                                                position: 'absolute',
                                                                left: 0,
                                                                top: 4,
                                                                marginLeft: 0
                                                            },
                                                            dateInput: {
                                                                marginLeft: 36
                                                            }
                                                        }}
                                                    />
                                                    ) 
                                                : (<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                                    <DatePickerIOS
                                                        date={this.state.chosenDate}
                                                        onDateChange={this.setDate}
                                                        style={{ alignContent: 'flex-end', width: "100%" }}
                                                    /></View>))}
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
                                        <TouchableOpacity 
                                            style={{ flex: 1, height: 40, borderRadius: 20, marginLeft: 40, marginRight: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                            <Text>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={{ flex: 1, height: 40, borderRadius: 20, marginRight: 40, color: 'white', marginLeft: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0099ff' }}
                                            onPress={async () => { await AsyncStorage.multiSet([[this.state.Email, this.state.Email], [this.state.password, this.state.password]]);}} >
                                            <Text>Save</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    )
                    :
                    (
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={[styles.searchSection,{ flex: 1, flexDirection: 'row',marginTop:48, marginHorizontal: 24, marginVertical:8 }]}>
                                    <EvilIcons name="user" size={32} color='black' />
                                    <TextInput
                                        value={this.state.validate_user}
                                        style={styles.input}
                                        placeholder="User "
                                        onChangeText={(searchString) => { this.setState({ validate_user: searchString }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <View>
                                        <TouchableOpacity onPress={() => this.setState({ validate_user: '' })}>
                                        <Icon name='circle-with-cross' size={32} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={[styles.searchSection,{ flex: 1, flexDirection: 'row', marginHorizontal: 24, marginVertical:8 }]}>
                                    <EvilIcons name="lock" size={32} color='black' />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="password "
                                        secureTextEntry={this.state.pass_flag}
                                        onChangeText={(searchString) => { this.setState({ validate_pass: searchString }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <View>
                                        <TouchableOpacity 
                                            activeOpacity={0.1} 
                                            onPress={() => this.visibility()}
                                        >
                                        {(this.state.pass_flag == true) ? (<MaterialIcons name='visibility-off' size={32}></MaterialIcons>) : (<MaterialIcons name='visibility' size={32}></MaterialIcons>)}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ marginTop: 16 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginEnd: 32, alignItems: 'center' }}>
                                        <Text>Save Password</Text>
                                        <Switch 
                                            value={this.state.value} 
                                            onValueChange={(value) => { this.setState({value:value})}}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 80 }}>
                                    <TouchableOpacity
                                        onPress={()=>Actions.home()} 
                                        style={{ flex: 1, height: 40, borderRadius: 20, marginLeft: 60, marginRight: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                        <Text>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ flex: 1, height: 40, borderRadius: 20, marginRight: 60, marginLeft: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}
                                        onPress={async () => {
                                            await AsyncStorage.multiGet([this.state.validate_user, this.state.validate_pass], (err,values) => {
                                                if (this.state.validate_user!='' && this.state.validate_pass!=''){
                                                    ((values[0][1] == this.state.validate_user && values[1][1] == this.state.validate_pass) ? (Alert.alert('WELCOME',values[0][1]),this.setState({validate_pass:''}),Actions.home()) : (Alert.alert('alert','Worng user name or password')));
                                                }else{Alert.alert('not null')}
                                            });
                                        }}
                                    >
                                        <Text>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    )
                }
            </View>
        )
    }
}