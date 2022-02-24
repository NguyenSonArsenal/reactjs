import React from "react";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    render(){
        const { expanded } = this.state;
        const toggledClass = expanded ? 'expanded' : 'collapsed';
        return(
            <div>
                <div className={`content ${toggledClass}`}>
                    Giờ thì tình đã phai
                    Em đâu rồi người về với ai
                    Còn lại mình lẻ loi
                    Riêng mình tôi ôm nỗi đau này
                    Còn lại gì nữa đâu
                    Ừ thì còn lại gì nữa đâu
                    Giờ thì đành mất em
                    Riêng mình tôi đợi chờ
                    Người ơi hãy tin anh này
                    Và em đến đây đi
                    Ngàn hoa lá đang thay màu
                    Này em thích hoa gì?
                    Nụ cười bé xinh xuân ngời
                    Người làm xao xuyến tim anh
                    Tình anh sẽ không phai mờ
                    Vì anh đã trao dành
                    Một ngày, một ngày hạ buồn kèm phượng hồng khi còn vương nắng
                    Bầu trời một màu tình yêu, thu vừa sang lá xanh phai màu
                    Đọng lại một chút nhớ thương đang rơi rơi trên khóe mi lệ buồn
                    Chuyện tình ta bao lâu rồi đây mai cách xa
                    Từng ngày, từng ngày còn gì, vừa rụng rơi khi mùa đông đến
                    Là ngày mà người rời xa theo người ta bão giông nơi này
                    Chẳng còn đâu những vấn vương, theo hương hoa bóng ai phai mờ
                    Lời chia tay em chưa từng nói với anh
                    Cớ sao người vội đi
                    Người ơi hãy tin anh này
                    Và em đến đây đi
                    Ngàn hoa lá đang thay màu
                    Này em thích hoa gì
                    Nụ cười bé xinh xuân ngời
                    Người làm xao xuyến tim anh
                    Tình anh sẽ không phai mờ
                    Vì anh đã trao dành
                    Một ngày, một ngày hạ buồn kèm phượng hồng khi còn vương nắng
                    Bầu trời một màu tình yêu, thu vừa sang lá xanh phai màu
                    Đọng lại một chút nhớ thương đang rơi rơi trên khóe mi lệ buồn
                    Chuyện tình ta bao lâu rồi đây mai cách xa
                    Từng ngày, từng ngày còn gì, vừa rụng rơi khi mùa đông đến
                    Là ngày mà người rời xa theo người ta bão giông nơi này
                    Chẳng còn đâu những vấn vương theo hương hoa bóng ai phai mờ
                    Lời chia tay em chưa từng nói với anh
                    Cớ sao người vội đi
                </div>
                <button onClick={() => this.setState({ expanded: !expanded })}>
                    {expanded ? 'View Less' : 'View More'}
                </button>
            </div>
        )
    }
}


export default App;