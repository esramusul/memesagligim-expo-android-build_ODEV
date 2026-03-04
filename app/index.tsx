import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function IndexScreen() {
    const router = useRouter();

    const handlePress = (route: string) => {
        router.push(route as any);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topSection}>
                {/* Hakkımızda Tile - Purple with pink ribbon icon */}
                <TouchableOpacity style={[styles.tile, styles.aboutTile]} onPress={() => handlePress('/hakkimizda')}>
                    <FontAwesome5 name="ribbon" size={32} color="white" />
                    <Text style={styles.tileText}>HAKKIMIZDA</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.grid}>
                {/* Row 1 */}
                <TouchableOpacity style={[styles.tileWrapper, styles.hissediyorumTile]} onPress={() => handlePress('/nasil-hissediyorum')}>
                    <Ionicons name="chatbubble-ellipses-outline" size={36} color="white" />
                    <Text style={styles.tileText}>Bugün Nasıl Hissediyorum?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tileWrapper, styles.ipucuTile]} onPress={() => handlePress('/gunluk-ipucu')}>
                    <Ionicons name="help-circle-outline" size={36} color="white" />
                    <Text style={styles.tileText}>Günlük İpucu</Text>
                </TouchableOpacity>

                {/* Row 2 */}
                <TouchableOpacity style={[styles.tileWrapper, styles.egitimlerTile]} onPress={() => handlePress('/egitimler')}>
                    <MaterialIcons name="menu-book" size={36} color="white" />
                    <Text style={styles.tileText}>Eğitimler</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tileWrapper, styles.formlarTile]} onPress={() => handlePress('/formlar')}>
                    <FontAwesome5 name="user-md" size={36} color="white" />
                    <Text style={styles.tileText}>Formlar ve Ölçekler</Text>
                </TouchableOpacity>

                {/* Row 3 */}
                <TouchableOpacity style={[styles.tileWrapper, styles.bilgilerimTile]} onPress={() => handlePress('/bilgilerim')}>
                    <Ionicons name="person-circle-outline" size={36} color="white" />
                    <Text style={styles.tileText}>Şifre ve Bilgileri Düzenle</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tileWrapper, styles.kaynakcaTile]} onPress={() => handlePress('/kaynakca')}>
                    <MaterialIcons name="library-books" size={36} color="white" />
                    <Text style={styles.tileText}>Kaynakça</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        paddingBottom: 40,
    },
    topSection: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    tile: {
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    aboutTile: {
        backgroundColor: '#C86CDA', // Purple
        width: '60%',
        height: 100,
    },
    grid: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    tileWrapper: {
        width: '47%',
        height: 120,
        borderRadius: 20,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    tileText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    hissediyorumTile: {
        backgroundColor: '#E91E63', // Pink
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    ipucuTile: {
        backgroundColor: '#FFD54F', // Yellow/Gold
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    egitimlerTile: {
        backgroundColor: '#90CAF9', // Light Blue
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    formlarTile: {
        backgroundColor: '#A5D6A7', // Light Green
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    bilgilerimTile: {
        backgroundColor: '#8E24AA', // Dark Purple
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    kaynakcaTile: {
        backgroundColor: '#F44336', // Red
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
});
