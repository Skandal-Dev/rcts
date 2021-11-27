import React from 'react';


class NotePad extends React.Component {

		render(){
				return (
					<div className="note" id="NotePad">
							<div className="note-header">
									<div class="btn-group m-2" role="group" aria-label="Basic example">
											<button type="button" class="btn ">
													<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
															<path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
													</svg>

											</button>
											<button type="button" class="btn ">
													<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path></svg>
											</button>

											<button type="button">
											<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path></svg>
											</button>
									</div>

									<div class="btn-group m-2" role="group" aria-label="Basic example">
											<button type="button" class="btn ">Left</button>
											<button type="button" class="btn ">Middle</button>
											<button type="button" class="btn">Right</button>
									</div>

									<div class="btn-group m-2" role="group" aria-label="Basic example">
											<button type="button" class="btn ">Titre</button>
											<button type="button" class="btn ">Font 1</button>
											<button type="button" class="btn ">Font 2</button>
									</div>
							</div>
							<div className="note-body">
									<div class="form-group p-2">
										<textarea class="form-control apple title" rows="1">
											Ecricre le titre ici
										</textarea>
										<textarea class="form-control stack" rows="10">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium arcu tortor, eget venenatis est rhoncus vel. Maecenas dictum tellus in nisi ullamcorper, vel elementum purus aliquam. Suspendisse tristique pretium condimentum. Vivamus dignissim molestie cursus. Nullam vulputate, metus consequat cursus aliquet, nunc ante mollis est, vitae interdum tortor velit sit amet nisi. Pellentesque dignissim ipsum dolor, at fringilla lacus rhoncus non. Mauris in sollicitudin velit. Maecenas id nibh risus. Maecenas placerat interdum est dignissim dignissim.
										</textarea>
									</div>
							</div>
					</div>
				);
		}

}


export default NotePad;