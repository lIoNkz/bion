<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\Textblock;
use Mail;
use App\Mail\Sendmail;
use App\Mail\Sendmail_service;

class FrontendController extends Controller
{
    public function index() {
        $mainSlider = Textblock::where('id', 1)->first()->text;
        $howToPay = Textblock::where('id', 2)->first()->text;
        $services = Textblock::where('id', 3)->first()->text;
        $vacancies = Textblock::where('id', 4)->first()->text;
        $waii = Textblock::where('id', 5)->first()->text;
        $hww = Textblock::where('id', 6)->first()->text;
        $alreadyUsed = Textblock::where('id', 7)->first()->text;
        $ourPartners = Textblock::where('id', 8)->first()->text;
        $otcet = Textblock::where('id', 9)->first()->text;
        $figures = Textblock::where('id', 10)->first()->text;
        $why = Textblock::where('id', 11)->first()->text;
        $pricers = Textblock::where('id', 12)->first()->text;
        $lic = Textblock::where('id', 13)->first()->text;
        $about = Textblock::where('id', 14)->first()->text;
        $testi = Textblock::where('id', 15)->first()->text;
        $quiz = Textblock::where('id', 16)->first()->text;
        $footer = Textblock::where('id', 17)->first()->text;
        $popup_phone = Textblock::where('id', 18)->first()->text;

    	return view('frontend.index')->with([
            'mainSlider' => $mainSlider,
            'howToPay' => $howToPay,
            'services' => $services,
            'vacancies' => $vacancies,
            'waii' => $waii,
            'hww' => $hww,
            'alreadyUsed' => $alreadyUsed,
            'ourPartners' => $ourPartners,
            'ourPartners' => $ourPartners,
            'otcet' => $otcet,
            'figures' => $figures,
            'why' => $why,
            'pricers' => $pricers,
            'lic' => $lic,
            'about' => $about,
            'testi' => $testi,
            'quiz' => $quiz,
            'footer' => $footer,
    		'popup_phone' => $popup_phone
    	]);
    }

    public function send_message(Request $request) {

	  $this->validate($request, [
	        'name' => 'required',
	        'phone' => 'required',
	        'text' => 'required'
	    ]);

	  	$message = array_add($request->all(), 'status', 'new');;
	   
	    $user = Message::create($message);

    	return redirect('/');
    }    

    public function mail(Request $request)
    {
        $data = [
            'text' => $request->text,
            'phone' => $request->phone,
            'name' => $request->name,
        ];

        Mail::to(env('MAIL_TO'))->send(new Sendmail($data));
        return redirect('/');
    }

    public function mail_service(Request $request)
    {
        $data = [
            'service' => $request->service,
            'phone' => $request->phone
        ];

        Mail::to(env('MAIL_TO'))->send(new Sendmail_service($data));
        return redirect('/');
    }
}
