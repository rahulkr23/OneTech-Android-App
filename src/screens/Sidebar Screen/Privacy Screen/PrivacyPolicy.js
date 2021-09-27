
import React  from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Paragraph } from 'react-native-paper';


const Developer = () => {

    return (
        <ScrollView>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 10, textAlign: 'center', backgroundColor: 'yellow' }}>Read Care Fully</Text>
            <View style={styles.card1}>
                <Paragraph style={{ marginLeft: 10 }}>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>Rahul Kumar</Text> built the OneTech app as a Free app. This SERVICE is provided by Rahul Kumar at no cost and is intended for use as is.
                    This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
                    If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is
                    used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at OneTech unless
                    otherwise defined in this Privacy Policy.
                </Paragraph>
            </View>
            <View>

            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Information Collection and Use</Text>
            <View style={styles.card2}>
                <Paragraph style={{ marginLeft: 10 }}>
                    For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information,
                    including but not limited to We are not collect any personal information when you are using our app,
                    if you are using chat section then I will collect your email and profile picture..
                    The information that I request will be retained on your device and is not collected by me in any way.
                    The app does use third party services that may collect information used to identify you.
                    Link to privacy policy of third party service providers used by the app
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>  1.Google Play Services</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>  2.Google Analytics for Firebase</Text>
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Log Data</Text>
            <View style={styles.card3}>
                <Paragraph style={{ marginLeft: 10 }}>
                    I want to inform you that whenever you use my Service, in a of an error in the app I collect data and information (through third party products)
                    your phone called Log Data. This Log Data may include information such as your device Internet Protocol
                    (“IP”) address, device name, operating system version, the configuration of the
                    app when utilizing my Service, the time and date of your use of the Service,
                    and other statistics.
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Cookies</Text>
            <View style={styles.card4}>
                <Paragraph style={{ marginLeft: 10 }}>
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                    This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services.
                    You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device.
                    If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Service Providers</Text>
            <View style={styles.card5}>
                <Paragraph style={{ marginLeft: 10 }}>
                    I may employ third-party companies and individuals due to the following reasons:
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>1.To facilitate our Service,</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}> 2.To provide the Service on our behalf,</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>  4.To assist us in analyzing how
                        our Service is used.</Text>
                    I want to inform users of this Service that these third parties have access to your Personal Information.
                    The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information
                    for any other purpose.
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Security</Text>
            <View style={styles.card6}>
                <Paragraph style={{ marginLeft: 10 }}>
                    I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it.
                    But remember that no method of transmission over the internet,
                    or method of electronic storage is 100% secure and reliable,
                    and I cannot guarantee its absolute security.
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Links to Other Sites</Text>
            <View style={styles.card7}>
                <Paragraph style={{ marginLeft: 10 }}>
                    This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me.
                    Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content,
                    privacy policies, or practices of any third-party sites or services.
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Children’s Privacy</Text>
            <View style={styles.card8}>
                <Paragraph style={{ marginLeft: 10 }}>

                    These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age.
                    In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers.
                    If you are a parent or guardian and you are aware that your child has provided us with personal information,
                    please contact me so that I will be able to do necessary actions.
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Changes to This Privacy Policy</Text>
            <View style={styles.card9}>
                <Paragraph style={{ marginLeft: 10 }}>

                    I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.
                    I will notify you of any changes by posting the new Privacy Policy on this page.
                    This policy is effective as of 2021-07-26
                </Paragraph>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>Contact Us</Text>
            <View style={styles.card10}>
                <Paragraph style={{ marginLeft: 10 }}>
                    If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at
                    <TouchableOpacity>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>rahulwhy23@gmail.com</Text>
                    </TouchableOpacity>
                </Paragraph>
            </View>
            <View>
            </View>
        </ScrollView>
    )
}
export default Developer
const styles = StyleSheet.create({

    card1: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 340,
        marginTop: 20,
    },
    card2: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 280,
        marginTop: 20,
    },
    card3: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 200,
        marginTop: 20,
    },
    card4: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 250,
        marginTop: 20,
    },
    card5: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 220,
        marginTop: 20,
    },
    card6: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 150,
        marginTop: 20,
    },
    card7: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 180,
        marginTop: 20,
    },
    card8: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 230,
        marginTop: 20,
    },
    card9: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 140,
        marginTop: 20,
    },
    card10: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginVertical: 7,
        height: 100,
        marginTop: 20,
    },

});
