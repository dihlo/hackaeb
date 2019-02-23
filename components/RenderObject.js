export const RenderObject = (key, item) => {
		console.log('renderObject');
        console.log(item);
        
        const renderSpend = (key, item) => {
            return ( <Spend key={ key } PickerDate={item.period} /> );
        }
    
        const renderBalance = (key, item) => {
            return ( <Balance key={ key } date={item.date} /> );
        }
    
        const renderSum = (key, item) => {
            return ( <Sum  key={ key } amount={item.amount} /> );
        }
    
        const renderCategory = () => {
            const { category } = this.state;
            return ( <Category/> );
        }
    
        const renderBigger = (key, item) => {
             return (
               <View style={{ padding: 25 }}>
                 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='right' size={20}/>
               </View>
             );
        }
    
        const renderSmaller = (key, item) => {
             return (
               <View style={{ padding: 25}}>
                 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='left' size={20}/>
               </View>
             );
        }
    
        const renderAnd = () => {
            const { and } = this.state;
               
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>И</Text>
               </View>
             );
        }
    
        const renderOr = () => {
            const { or } = this.state;		   
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>ИЛИ</Text>
               </View>
             );
        }
    
        const conrenderTran = () => {
            const { tran } = this.state;		   
            return ( <Tran/> );
        }
    
        const renderBlock = () => {
            const { block } = this.state;		   
            return ( <Block/> );
        }
    
        const renderAndDo = () => {
            const { andDo } = this.state;
               
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>И</Text>
               </View>
             );
        }

        const renderOrDo = () => {
            const { orDo } = this.state;		   
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>ИЛИ</Text>
               </View>
             );
        }

		const renderCondLeft = () => {
			switch(item.type) {
				case 'spend':
					return renderSpend(key, item);
				case 'balance':
					return renderBalance(key, item);
				// case 'category':
				// 	renderCategory(key, item);
				// 	break;
				// case 'and':
				// 	return renderAnd(key, item);
				// case 'or':
				// 	return renderOr(key, item);
				// case 'tran':
				// 	return renderTran(key, item);
				// case 'block':
				// 	return renderBlock(key, item);
				// case 'andDo':
				// 	return renderAndDo(key, item);
				// case 'orDo':
				// 	return renderOrDo(key, item);
				default:
					<Error text={item} />;
					break;
			}};
		const renderCond = () => {
			switch(item.condition){
				case 'gt':
					return renderBigger(key, item);
				case 'lt':
					return renderSmaller(key, item);
			}
		};
		const renderCondRigth = () => {
			if(item.amount > 0){
				return renderSum(key, item);
			}
		};
		return (
			<View>
				{renderCondLeft()}
				{renderCond()}
				{renderCondRigth()}
			</View>
		);
	}

	renderArray(arr) {
		console.log('arr');
		console.log(arr);
		return arr.map((item,i) => {
			const key = i;
			return renderObject(key, item);
		});
    }
    
    