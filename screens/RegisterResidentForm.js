import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useFormik, Formik } from 'formik';
import { SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Input from '../FormElement/Input';
import Button from '../FormElement/Button';
import Select from '../FormElement/Select';
import Check from '../FormElement/CheckBox';
import Header from '../FormElement/Header';
import { Divider } from 'react-native-elements'; 

const genderOptions = 
  [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]

const ResidentRegisterForm = () => {
  return (
    
    <Formik
      initialValues={{
        name:'', 
        age:'',
        gender:'',
        medical_history:'',
        prescribed_med:'',
        emergency_contact:'',
        acid_reflux: false,
        chronic_low_back_pain: false,
        erectile_dysfunction: false,
        prostate_problem: false,
        asthma: false,
        cholesterol_problem: false,
        gout: false,
        migraine: false,
        thyroid_problem: false,
        coagulation_problem: false,
        diabete: false,
        high_blood_pressure: false,
        osteopenia: false,
        alcoholism: false,
      }}
      onSubmit={(values) => {
        console.log('submitted', values);
      }}
    >
      {({handleChange, handleSubmit, values, setFieldValue, isSubmitting}) => (
        <>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
              <KeyboardAwareScrollView 
                contentContainerStyle={styles.container}
              >
              
                <View>
                  <Header label="Basic Information" />
                  <Input label="Name" value={values.name} onChangeText={handleChange('name')}/>
                  <Input label="Age" value={values.age} onChangeText={handleChange('age')}/>
                  <Select 
                    label="Gender"
                    placeholder={{label:"Select gender ...", value: null}}
                    onValueChange={(value) => {
                      console.log(value);
                      handleChange('gender');
                    }}
                    items={genderOptions}
                  />
                  <Input label="Emergency Contact" value={values.emergency_contact} onChangeText={handleChange('emergency_contact')} />
                  {/* midical history section */}
                  <View>
                    <Divider style={{ backgroundColor: "#009387", height: 2 }} />
                    <Header label="Medical History Section" />
                    <Check label="Acid reflux" onPress={() => setFieldValue('acid_reflux', !values.checked)}/>
                    <Check label="Chronic low back pain" onPress={() => setFieldValue('chronic_low_back_pain', !values.checked)}/>
                    <Check label="Erectile dysfunction" onPress={() => setFieldValue('erectile_dysfunction', !values.checked)}/>
                    <Check label="Prostate problem" onPress={() => setFieldValue('prostate_problem', !values.checked)}/>
                    <Check label="Asthma" onPress={() => setFieldValue('asthma', !values.checked)}/>
                    <Check label="Cholesterol problem" onPress={() => setFieldValue('cholesterol_problem', !values.checked)}/>
                    <Check label="Gout" onPress={() => setFieldValue('gout', !values.checked)}/>
                    <Check label="Migraine" onPress={() => setFieldValue('migraine', !values.checked)}/>
                    <Check label="Thyroid problem" onPress={() => setFieldValue('thyroid_problem', !values.checked)}/>
                    <Check label="Coagulation problem" onPress={() => setFieldValue('coagulation_problem', !values.checked)}/>
                    <Check label="Diabete" onPress={() => setFieldValue('diabete', !values.checked)}/>
                    <Check label="High blood pressure" onPress={() => setFieldValue('high_blood_pressure', !values.checked)}/>
                    <Check label="Osteopenia" onPress={() => setFieldValue('osteopenia', !values.checked)}/>
                    <Check label="Alcoholism" onPress={() => setFieldValue('alcoholism', !values.checked)}/>
                    <Check label="Other" onPress={() => setFieldValue('other', !values.checked)}/>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </ScrollView>
          </SafeAreaView>
          <View>
            <Button text="Submit" onPress={handleSubmit}/>
          </View>
        </>
      )}
    </Formik>
      
  );

};

export default ResidentRegisterForm;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    header: {
      fontSize: 22
    },
    subHeader: {
      fontSize: 15
    }
  });