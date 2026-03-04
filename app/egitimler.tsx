import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Accordion from '../components/Accordion';

export default function EgitimlerScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerArea}>
                <Text style={styles.headerTitle}>Meme Sağlığı Hakkında{'\n'}Eğitimler!</Text>
            </View>

            <View style={styles.contentArea}>
                <Accordion title="1.HASTALIK, TANI-TEDAVİ, TEDAVİ SONRASI İZLEM">
                    <TouchableOpacity style={styles.listItem} onPress={() => Alert.alert('Eğitim', 'Eğitim detayları yakında eklenecektir.')}>
                        <View style={styles.iconCircle}>
                            <FontAwesome5 name="info" size={12} color="white" />
                        </View>
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemTitle}>1.1.MEME KANSERİ</Text>
                            <Text style={styles.itemSubtitle}>Eğitimi İncele</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.listItem} onPress={() => Alert.alert('Eğitim', 'Eğitim detayları yakında eklenecektir.')}>
                        <View style={styles.iconCircle}>
                            <FontAwesome5 name="info" size={12} color="white" />
                        </View>
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemTitle}>1.2.MEME KANSERİNDE RİSK FAKTÖRLERİ</Text>
                            <Text style={styles.itemSubtitle}>Eğitimi İncele</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.listItem} onPress={() => Alert.alert('Eğitim', 'Eğitim detayları yakında eklenecektir.')}>
                        <View style={styles.iconCircle}>
                            <FontAwesome5 name="info" size={12} color="white" />
                        </View>
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemTitle}>1.3.MEME KANSERİ TANILAMA ve TARAMA PROGRAMI</Text>
                            <Text style={styles.itemSubtitle}>Eğitimi İncele</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.listItem} onPress={() => Alert.alert('Eğitim', 'Eğitim detayları yakında eklenecektir.')}>
                        <View style={styles.iconCircle}>
                            <FontAwesome5 name="info" size={12} color="white" />
                        </View>
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemTitle}>1.4.KENDİ KENDİNE MEME MUAYENESİ</Text>
                            <Text style={styles.itemSubtitle}>Eğitimi İncele</Text>
                        </View>
                    </TouchableOpacity>
                </Accordion>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E91E63',
    },
    headerArea: {
        padding: 30,
        paddingTop: 10,
        paddingBottom: 40,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentArea: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    iconCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#C86CDA', // Purple matching the design
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    itemTextContainer: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 14,
        color: '#666',
        fontWeight: '600',
        marginBottom: 4,
    },
    itemSubtitle: {
        fontSize: 10,
        color: '#aaa',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 5,
    },
});
