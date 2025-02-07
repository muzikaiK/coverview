import React from 'react';
import './RandomTheme.css';
class RandomTheme extends React.Component {

    changeTheme = () => {
        const colorThemes = [
            {
                bgColor: '#d972ff',
                bdColor: '#581b98',
                ftColor: '#ff5733' // 鲜艳橙红色
            },
            {
                bgColor: '#a7ff83',
                bdColor: '#17b978',
                ftColor: '#ff4b5c' // 鲜艳粉红色
            },
            {
                bgColor: '#CB91FE',
                bdColor: '#5F01B2',
                ftColor: '#ffda5c' // 鲜艳黄色
            },
            {
                bgColor: '#9D2EFE',
                bdColor: '#3D0C6A',
                ftColor: '#6aff70' // 鲜艳绿色
            },
            {
                bgColor: '#88EF69',
                bdColor: '#362E48',
                ftColor: '#ff6b6b' // 鲜艳珊瑚红
            },
            {
                bgColor: '#ffa600',
                bdColor: '#44475a',
                ftColor: '#62ff62' // 鲜艳绿色
            },
            {
                bgColor: '#8078E7',
                bdColor: '#4B4681',
                ftColor: '#ff9f40' // 鲜艳橙色
            },
            {
                bgColor: '#B1B3E4',
                bdColor: '#333794',
                ftColor: '#ff6b81' // 鲜艳粉色
            },
            {
                bgColor: '#CA96DB',
                bdColor: '#7D3394',
                ftColor: '#ffcc5c' // 鲜艳黄色
            },
            {
                bgColor: '#F9A6A8',
                bdColor: '#55456F',
                ftColor: '#6aff70' // 鲜艳绿色
            },
            {
                bgColor: '#dcd6f7',
                bdColor: '#424874',
                ftColor: '#ff6b6b' // 鲜艳珊瑚红
            },
            {
                bgColor: '#aba9e9',
                bdColor: '#64638f',
                ftColor: '#ffda5c' // 鲜艳黄色
            },
            {
                bgColor: '#ffe9e3',
                bdColor: '#7c73e6',
                ftColor: '#ff4b5c' // 鲜艳粉红色
            },
            {
                bgColor: '#efb1ff',
                bdColor: '#742dd2',
                ftColor: '#6aff70' // 鲜艳绿色
            },
            {
                bgColor: '#fee856',
                bdColor: '#1b0044',
                ftColor: '#ff6b81' // 鲜艳粉色
            },
            {
                bgColor: '#fee856',
                bdColor: '#5c2a9d',
                ftColor: '#ff6b6b' // 鲜艳珊瑚红
            },
            {
                bgColor: '#16db93',
                bdColor: '#2c699a',
                ftColor: '#ffda5c' // 鲜艳黄色
            },
            {
                bgColor: '#ffc4d6',
                bdColor: '#ff5d8f',
                ftColor: '#6aff70' // 鲜艳绿色
            },
            {
                bgColor: '#80ed99',
                bdColor: '#22577a',
                ftColor: '#ff4b5c' // 鲜艳粉红色
            },
            {
                bgColor: '#ffb2e6',
                bdColor: '#8447ff',
                ftColor: '#ff9f40' // 鲜艳橙色
            },
            {
                bgColor: '',
                bdColor: '',
                ftColor: '#ff6b6b' // 鲜艳珊瑚红
            }
        ];

        const patterns = ['graph-paper', 'gigsaw', '', 'hideout', 'dots', '', 'falling-triangles', 'circuit-board', '',
            'temple', 'anchors', '', 'brickwall', 'wiggle', 'overlapping-circles', '', 'tic-tac-toe', 'leaf', '', 'bubbles', 'squares', ''];
        const indexOfColors = Math.floor(Math.random() * colorThemes.length);
        const theme = colorThemes[indexOfColors];

        const indexOfPattern = Math.floor(Math.random() * patterns.length);
        const Pattern = patterns[indexOfPattern];

        this.props.onThemeChange(theme, Pattern);
    }

    render() {
        return (
            <div className="flex flex-col justify-center">
                <div className="shuffle-btn  flex justify-center items-center    p-2    cursor-pointer" onClick={this.changeTheme}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-gray-600 hover:text-gray-700 " width="20" height="20" viewBox="0 0 24 24" ><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
                </div>

            </div>
        );
    }
}
export default RandomTheme;
