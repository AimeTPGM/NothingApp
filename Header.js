import React from 'react'
import { Text, View, Linking } from 'react-native'
import header from './stylesheets/header'

export class Header extends React.Component {
  render() {
    return (
        <View style={header.greenBackground}>
			<View>
				<View>
					<View>
						<View>
							<Text onPress={() => Linking.openURL('http://google.com')}>Home</Text>
						</View>
						<View>
							<Text>About</Text>
						</View>
						<View>
							<Text>Blog</Text>
						</View>
						<View>
							<Text style={header.link} onPress={() => Linking.openURL('http://google.com')}>Contact Us</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
    );
  }
}
