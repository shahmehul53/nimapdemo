import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import Icons from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('screen').width;

export default class Main extends Component {
	state = {
		data: []
	};
	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axios('http://test.chatongo.in/testdata.json').then((res) => {
			console.log('test ', res);
			this.setState({ data: res.data.data.Records });
		});
	};

	render() {
		console.log('rebder ', this.state.data);
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<View
						style={{
							justifyContent: 'flex-end',
							backgroundColor: 'black',
							height: 100
						}}
					>
						<Text
							style={{
								color: 'white',
								fontSize: 24,
								fontWeight: 'bold',
								marginBottom: 10,
								marginLeft: 20
							}}
						>
							Record List 1
						</Text>
					</View>
					<View style={{ backgroundColor: 'red' }}>
						{this.state.data.map((item, index) => {
							return (
								<View key={index} style={{ height: 250 }}>
									<View
										style={{
											backgroundColor: 'green',
											flex: 1.5,
											position: 'relative'
										}}
									>
										<Image
											source={{ uri: item.mainImageURL }}
											style={{ flex: 1, width: null, height: null }}
										/>
										<View
											style={{
												height: 70,
												width: 70,
												borderRadius: 70,
												position: 'absolute',
												zIndex: 10,
												backgroundColor: '#0a4b5d',
												justifyContent: 'center',
												alignItems: 'center',
												bottom: -30,
												right: 10
											}}
										>
											<Text style={{ color: 'white' }}>100%</Text>
										</View>
										<View
											style={{
												height: 100,
												backgroundColor: 'white',
												width: WIDTH - 95,
												borderRadius: 10,
												position: 'absolute',
												bottom: -35,
												left: 10,
												padding: 20,
												justifyContent: 'space-around'
											}}
										>
											<Text>{item.title}</Text>
											<Text>{item.shortDescription} </Text>
										</View>
									</View>
									<View style={{ backgroundColor: '#3983a3', flex: 1, zIndex: -1 }}>
										<View style={{ flexDirection: 'row', flex: 1, paddingTop: 35 }}>
											<View
												style={{
													flex: 1,
													justifyContent: 'space-around',
													alignItems: 'center'
												}}
											>
												<Text style={{ color: 'white' }}>$ {item.collectedValue}</Text>
												<Text style={{ color: 'white' }}>FUNDED</Text>
											</View>
											<View
												style={{
													flex: 1,
													justifyContent: 'space-around',
													alignItems: 'center'
												}}
											>
												<Text style={{ color: 'white' }}>$ {item.totalValue}</Text>
												<Text style={{ color: 'white' }}>GOALS</Text>
											</View>
											<View
												style={{
													flex: 1,
													justifyContent: 'space-around',
													alignItems: 'center'
												}}
											>
												<Text style={{ color: 'white' }}>$ 500</Text>
												<Text style={{ color: 'white' }}>END IN</Text>
											</View>
											<View
												style={{
													flex: 1,
													justifyContent: 'center',
													alignItems: 'center'
												}}
											>
												<View
													style={{
														backgroundColor: 'white',
														padding: 8,
														borderRadius: 10,
														paddingHorizontal: 20
													}}
												>
													<Text>Pledge</Text>
												</View>
											</View>
										</View>
									</View>
								</View>
							);
						})}
					</View>
				</View>
			</ScrollView>
		);
	}
}

<View style={{ backgroundColor: 'blue', justifyContent: 'flex-end' }}>
	{/* <View style={{ flexDirection: 'row' }}> */}
	<View style={{ justifyContent: 'flex-end', marginTop: 30 }}>
		<View
			style={{
				flexDirection: 'row',
				backgroundColor: 'white',
				margin: 10
				//justifyContent: 'space-between',
			}}
		>
			<Text>{item.collectedValue}</Text>
			<Text>{item.collectedValue}</Text>
			<Text>{item.collectedValue}</Text>
		</View>
		<View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 10 }}>
			<Text>{item.collectedValue}</Text>
			<Text>{item.collectedValue}</Text>
			<Text>{item.collectedValue}</Text>
		</View>
	</View>
	{/* </View> */}
	<View style={{ alignItems: 'flex-end' }}>
		<View
			style={{
				flexDirection: 'row',
				backgroundColor: 'white',
				borderRadius: 10,
				margin: 10,
				height: 30,
				width: 80

				//alignItems: 'center'
			}}
		>
			<Text style={{ padding: 5 }}>PLEDGE</Text>
		</View>
	</View>
</View>;
