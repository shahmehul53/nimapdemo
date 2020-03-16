import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import Axios from 'axios';

const WIDTH = Dimensions.get('screen').width;

const App = () => {
	const [ data, setData ] = useState([]);

	const apiCall = () => {
		Axios.get('http://test.chatongo.in/testdata.json').then((res) => {
			console.log('REsult', res.data.data.Records), setData(res.data.data.Records);
		});
	};

	useEffect(() => {
		apiCall();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: 'black' }}>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 30,
						color: 'white',
						textAlign: 'justify',
						marginTop: 100,
						marginLeft: 20,
						marginBottom: 20
					}}
				>
					Record List
				</Text>
			</View>
			{/* <View style={{ flex: 1 }}> */}
			<FlatList
				data={data}
				renderItem={({ item }) => {
					return (
						<View style={{ flex: 1, backgroundColor: 'red' }}>
							<View style={{ height: 220, backgroundColor: 'green' }}>
								<Image source={{ uri: item.mainImageURL }} style={{ height: '100%', width: '100%' }} />
							</View>

							<View style={{ height: 120, backgroundColor: '#3983a3' }}>
								<View style={{ height: 50 }} />
								<View
									style={{
										height: 70,
										//backgroundColor: 'green',
										flexDirection: 'row'
										// justifyContent: 'space-between'
									}}
								>
									<View
										style={{
											marginTop: 20,
											width: '75%',
											//backgroundColor: 'yellow',
											alignItems: 'flex-start',
											justifyContent: 'space-evenly',
											marginBottom: 10
										}}
									>
										<View
											style={{
												width: '80%',
												flexDirection: 'row',
												//backgroundColor: '#f0f',
												alignItems: 'center',
												justifyContent: 'flex-start'
											}}
										>
											<Text
												style={{
													paddingLeft: 30,
													paddingRight: 40,
													color: '#fff',
													fontWeight: 'bold'
												}}
											>
												₹{item.collectedValue}
											</Text>
											<Text
												style={{
													paddingLeft: 30,
													paddingRight: 40,
													color: '#fff',
													fontWeight: 'bold'
												}}
											>
												₹{item.collectedValue}
											</Text>
											<Text
												style={{
													paddingLeft: 40,
													paddingRight: 40,
													color: '#fff',
													fontWeight: 'bold'
												}}
											>
												36
											</Text>
										</View>
										<View
											style={{
												width: '80%',
												flexDirection: 'row',
												//backgroundColor: '#f0f',
												alignItems: 'center',
												justifyContent: 'space-between'
											}}
										>
											<Text
												style={{
													paddingLeft: 30,
													paddingRight: 40,
													color: '#fff',
													fontWeight: 'bold'
												}}
											>
												FUNDED
											</Text>
											<Text
												style={{
													paddingLeft: 20,
													paddingRight: 40,
													color: '#fff',
													fontWeight: 'bold'
												}}
											>
												GOALS
											</Text>
											<Text
												style={{
													paddingLeft: 15,
													//paddingRight: 40,
													color: '#fff',
													fontWeight: 'bold'
												}}
											>
												ENDS IN
											</Text>
										</View>
									</View>
									<View
										style={{
											alignItems: 'flex-start',
											justifyContent: 'center',
											marginTop: 10,
											width: '25%',
											marginLeft: 18,
											marginRight: 20
										}}
									>
										<View
											style={{
												backgroundColor: 'white',
												justifyContent: 'center',
												alignItems: 'center',
												borderRadius: 10
											}}
										>
											<Text style={{ padding: 5 }}>PLEDGE</Text>
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									position: 'absolute',
									height: 70,
									width: 70,
									borderRadius: 70,
									backgroundColor: '#0a4b5d',
									justifyContent: 'center',
									alignItems: 'center',
									top: 180,
									right: 20
								}}
							>
								<Text style={{ fontWeight: 'bold', color: '#fff' }}>100%</Text>
							</View>
							<View
								style={{
									position: 'absolute',
									height: 100,
									width: WIDTH - 125,
									backgroundColor: '#fff',
									borderRadius: 10,
									top: 160,
									left: 10,

									justifyContent: 'space-around'
								}}
							>
								<Text style={{ paddingTop: 5, fontWeight: 'bold', paddingHorizontal: 10 }}>
									{item.title}
								</Text>
								<Text style={{ paddingTop: 5, paddingHorizontal: 10 }}>{item.shortDescription}</Text>
							</View>
						</View>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
			{/* </View> */}
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1
		//marginTop: Constants.statusBarHeight
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		fontSize: 32
	}
});
