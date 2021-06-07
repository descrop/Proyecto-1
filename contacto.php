<?php 
                               if($_SERVER["REQUEST_METHOD"] == "POST"){

                                $nombre = $_POST["nombre"];
                                $email = $_POST["email"];
                                $mensaje = $_POST["mensaje"];

                                if(isset($nombre)){
                                    if(isset($email)){
                                        if(isset($mensaje)){

                                            $para = "francisco.calymayor@avitsol.com";
                                            $asunto = "Esto es una porueba";
                                            $cuerpo = $nombre."\n".$email."\n".$mensaje."\n";
                                            $adicional = "From: Noreply@francisco.com";

                                            mail($para,$asunto,$cuerpo,$adicional);
                                            
											echo"<div style='background-color:#38d430; font-size:1.5em; color: white; font-weight:bold; padding:5px;'>Gracias por tu tiempo. Nos pondremos en contacto contigo a la brevedad.</div><p>&nbsp;</p>";
                                         ?>
	
                                        <?php
                                      
                                        }
                                    }
                                }

                               }
                              
                               ?>
