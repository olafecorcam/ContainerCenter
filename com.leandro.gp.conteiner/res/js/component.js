sap.designstudio.sdk.Component
		.subclass(
				"com.leandro.gp.conteiner.Conteiner",
				function() {

					var saveDataResultCell = null;

					var _largura = null;
					var _altura = null;
					var _url = null;

					this.init = function() {
						// this.$().addClass(STYLE_DIV);
					};

					this.afterUpdate = function() {
						this.$().empty();

						var html1 = new sap.ui.core.HTML(
								"html1",
								{
									// the static content as a long string
									// literal
									content : "<iframe src='"+_url+"' height='"+ _altura +"' width='"+ _largura +"' frameBorder='0'></iframe>",
									preferDOM : false,
									// use the afterRendering event for 2
									// purposes
									afterRendering : function(e) {
										alert("teste");
									}
								});

						// create a MatrixLayout with defined rows and cells
						var oLayout = new sap.ui.commons.layout.MatrixLayout( {
							id : 'matrix3',
							layoutFixed : false,
							columns : 1,
							width : '100%'
						});

						// 1.Row
						var oRow = new sap.ui.commons.layout.MatrixLayoutRow( {
							id : 'Row-0',
							height : '800px'
						});

						oLayout.addRow(oRow);

						var oCell = new sap.ui.commons.layout.MatrixLayoutCell(
								{
									id : 'Cell-0-0'
								});
						oCell.setVAlign(sap.ui.commons.layout.VAlign.Top);
						oCell.setHAlign(sap.ui.commons.layout.HAlign.Center);

						oCell.addContent(html1);
						oRow.addCell(oCell);
						var teste = this.$().attr("id");
						// attach it to some element in the page
						oLayout.placeAt(this.$());
						//this.$().append(oLayout);
					};

					
					this.altura = function(value) {
						if (value === undefined) {
							return _altura;
						} else {
							_altura = value;
							return this;
						}
					};
					this.largura = function(value) {
						if (value === undefined) {
							return _largura;
						} else {
							_largura = value;
							return this;
						}
					};
					this.url = function(value) {
						if (value === undefined) {
							return _url;
						} else {
							_url = value;
							return this;
						}
					};
					

				});
